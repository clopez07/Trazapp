import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { TrazabilidadService } from 'src/app/services/trazabilidad.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { FincaService } from 'src/app/services/finca.service';
import { LagunaService } from 'src/app/services/laguna.service';
import { FotoService } from 'src/app/services/foto.service';
import { TrazabilidadRecepcion } from 'src/app/models/trazabilidad-recepcion.model';
import { DetalleBin } from 'src/app/models/detalle-bin.model';
import { Usuario } from 'src/app/models/usuario.model';
import { Cliente } from 'src/app/models/cliente.model';
import { Finca } from 'src/app/models/finca.model';
import { Laguna } from 'src/app/models/laguna.model';
import { CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-recepcion-form',
  templateUrl: './recepcion-form.page.html',
  styleUrls: ['./recepcion-form.page.scss'],
  standalone: false,
})
export class RecepcionFormPage implements OnInit {
  id?: string;
  soloLectura = false;
  usuarios: Usuario[] = [];
  clientes: Cliente[] = [];
  fincas: Finca[] = [];
  lagunas: Laguna[] = [];
  cameraSource = CameraSource;

  fotos: { pathLocal: string; nombreArchivo: string }[] = [];
  obteniendoGps = false;
  fotoAmpliada: string | null = null;

  remision: TrazabilidadRecepcion = {
    loteInterno: '',
    fecha: new Date().toISOString().slice(0, 10),
    turno: 'A',
    idCliente: 0,
    idFinca: 0,
    idLaguna: 0,
    fechaCosecha: '',
    horaCosecha: '',
    horaRecibido: '',
    remisionSAG: '',
    numeroAutorizacion: '',
    idUsuarioRealiza: 0,
    idUsuarioVerifica: 0,
    observaciones: '',
    correcciones: ''
  };

  bins: DetalleBin[] = [];

  constructor(
    private route: ActivatedRoute,
    private svc: TrazabilidadService,
    private usuarioSvc: UsuarioService,
    private clienteSvc: ClienteService,
    private fincaSvc: FincaService,
    private lagunaSvc: LagunaService,
    private fotoSvc: FotoService,
    private nav: NavController,
    private toast: ToastController,
    private alert: AlertController
  ) {}

  ngOnInit() {
    this.soloLectura = this.route.snapshot.queryParamMap.get('modo') === 'ver';

    this.usuarioSvc.getAll().subscribe(u => this.usuarios = u);
    this.clienteSvc.getActivos().subscribe(c => this.clientes = c);

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = idParam;
      this.svc.getRecepcionById(this.id).subscribe(r => {
        this.remision = r;
        this.onClienteChange(false);
        this.onFincaChange(false);
      });
      this.svc.getBinsByRecepcion(this.id).subscribe(b => this.bins = b);
      this.fotoSvc.getFotosByRegistro(this.id).subscribe(async fotos => {
        const cargadas: { pathLocal: string; nombreArchivo: string }[] = [];
        for (const f of fotos) {
          try {
            const pathVisible = await this.fotoSvc.obtenerPathVisible(f.pathLocal);
            cargadas.push({ pathLocal: pathVisible, nombreArchivo: f.nombreArchivo });
          } catch { /* archivo no disponible */ }
        }
        this.fotos = cargadas;
      });
    } else {
      this.generarLote();
    }
  }

  onClienteChange(resetear = true) {
    this.fincas = [];
    this.lagunas = [];
    if (resetear) {
      this.remision.idFinca = 0;
      this.remision.idLaguna = 0;
    }
    if (this.remision.idCliente) {
      this.fincaSvc.getActivasByCliente(this.remision.idCliente).subscribe(f => this.fincas = f);
    }
  }

  onFincaChange(resetear = true) {
    this.lagunas = [];
    if (resetear) {
      this.remision.idLaguna = 0;
    }
    if (this.remision.idFinca) {
      this.lagunaSvc.getActivasByFinca(this.remision.idFinca).subscribe(l => this.lagunas = l);
    }
  }

  async obtenerUbicacion() {
    this.obteniendoGps = true;
    try {
      const { lat, lng } = await this.fotoSvc.obtenerUbicacion();
      this.remision.latitud = lat;
      this.remision.longitud = lng;
      (await this.toast.create({ message: 'Ubicación obtenida correctamente.', duration: 2000, position: 'top', color: 'success' })).present();
    } catch {
      (await this.toast.create({ message: 'No se pudo obtener la ubicación.', duration: 2500, position: 'top', color: 'danger' })).present();
    } finally {
      this.obteniendoGps = false;
    }
  }

  async agregarFoto(source: CameraSource) {
    try {
      const foto = await this.fotoSvc.tomarOSeleccionarFoto(source);
      this.fotos.push(foto);
      (await this.toast.create({ message: 'Foto agregada.', duration: 1500, position: 'top', color: 'success' })).present();
    } catch {
      (await this.toast.create({ message: 'No se pudo capturar la foto.', duration: 2000, position: 'top', color: 'danger' })).present();
    }
  }

  async quitarFoto(i: number) {
    const a = await this.alert.create({
      header: 'Eliminar foto',
      message: '¿Eliminar esta foto?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar', role: 'destructive',
          handler: async () => {
            try { await this.fotoSvc.borrarFotoLocal(this.fotos[i].nombreArchivo); } catch {}
            this.fotos.splice(i, 1);
          }
        }
      ]
    });
    a.present();
  }

  abrirFoto(path: string) { this.fotoAmpliada = path; }
  cerrarFoto() { this.fotoAmpliada = null; }

  generarLote() {
    if (this.id) return; // En edición no se regenera el lote
    const fecha = this.remision.fecha;
    if (!fecha) return;
    this.svc.getAllRecepciones().subscribe(todas => {
      const delDia = todas.filter(r => r.fecha === fecha);
      const correlativo = String(delDia.length + 1).padStart(4, '0');
      this.remision.loteInterno = `R-${fecha}-${correlativo}`;
    });
  }

  agregarBin() {
    this.bins.push({
      idRecepcion: this.id || 0,
      numeroBin: '',
      cantidadLibras: 0,
      horaInicioProceso: '',
      estado: 'pendiente'
    });
  }

  quitarBin(i: number) {
    this.bins.splice(i, 1);
  }

  async guardar() {
    if (!this.remision.idCliente || !this.remision.idFinca || !this.remision.idLaguna) {
      (await this.toast.create({
        message: 'Selecciona cliente, finca y laguna.',
        duration: 3000, position: 'top', color: 'warning'
      })).present();
      return;
    }
    if (!this.remision.fechaCosecha || !this.remision.horaCosecha || !this.remision.horaRecibido) {
      (await this.toast.create({
        message: 'Completa las fechas y horas de cosecha y recibido.',
        duration: 3000, position: 'top', color: 'warning'
      })).present();
      return;
    }
    if (this.bins.length === 0) {
      (await this.toast.create({
        message: 'Agrega al menos un bin.',
        duration: 3000, position: 'top', color: 'warning'
      })).present();
      return;
    }

    const a = await this.alert.create({
      header: 'Confirmar',
      message: `¿Guardar remisión?\nLote: ${this.remision.loteInterno}`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: () => {
            if (this.id) {
              this.svc.updateRecepcion(this.id, this.remision).subscribe(() => this.nav.back());
            } else {
              this.svc.createRecepcion(this.remision).subscribe(async (creada) => {
                for (const bin of this.bins) {
                  bin.idRecepcion = creada.id!;
                  await firstValueFrom(this.svc.createBin(bin));
                }
                for (const f of this.fotos) {
                  await firstValueFrom(this.fotoSvc.createFoto({
                    idRegistro: creada.id!,
                    tipoRegistro: 'recepcion',
                    pathLocal: f.nombreArchivo,
                    nombreArchivo: f.nombreArchivo,
                    latitud: this.remision.latitud || 0,
                    longitud: this.remision.longitud || 0,
                    fechaFoto: new Date().toISOString()
                  }));
                }
                this.nav.navigateRoot('/recepciones');
              });
            }
          }
        }
      ]
    });
    await a.present();
  }
}
