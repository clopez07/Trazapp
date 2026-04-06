import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { CameraSource } from '@capacitor/camera';
import { MuestraSaborService } from 'src/app/services/muestra-sabor.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { FincaService } from 'src/app/services/finca.service';
import { LagunaService } from 'src/app/services/laguna.service';
import { FotoService } from 'src/app/services/foto.service';
import { MuestraSabor } from 'src/app/models/muestra-sabor.model';
import { Usuario } from 'src/app/models/usuario.model';
import { Cliente } from 'src/app/models/cliente.model';
import { Finca } from 'src/app/models/finca.model';
import { Laguna } from 'src/app/models/laguna.model';

interface CodigoLote {
  codigo: string;
  idCliente: number;
  idFinca: number;
  idLaguna: number;
  fincas: Finca[];
  lagunas: Laguna[];
  calificaciones: { idPanelista: string | number; nota: number }[];
  promedio: number;
}

@Component({
  selector: 'app-muestra-sabor-form',
  templateUrl: './muestra-sabor-form.page.html',
  styleUrls: ['./muestra-sabor-form.page.scss'],
  standalone: false,
})
export class MuestraSaborFormPage implements OnInit {
  id?: string;
  soloLectura = false;
  cameraSource = CameraSource;
  fotos: { pathLocal: string; nombreArchivo: string }[] = [];
  obteniendoGps = false;
  fotoAmpliada: string | null = null;

  usuarios: Usuario[] = [];
  panelistas: Usuario[] = [];
  clientes: Cliente[] = [];
  todasFincas: Finca[] = [];
  todasLagunas: Laguna[] = [];

  muestra: MuestraSabor = {
    fecha: new Date().toISOString().slice(0, 10),
    tipo: 'proceso',
    turno: 'A',
    idUsuarioRealiza: 0,
    observaciones: '',
    estado: 'pendiente'
  };

  panelistasSeleccionados: (string | number)[] = [];
  codigos: CodigoLote[] = [];

  constructor(
    private route: ActivatedRoute,
    private svc: MuestraSaborService,
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

    this.usuarioSvc.getAll().subscribe(d => this.usuarios = d);
    this.usuarioSvc.getActivos().subscribe(d => this.panelistas = d);
    this.clienteSvc.getActivos().subscribe(d => this.clientes = d);
    this.fincaSvc.getAll().subscribe(d => this.todasFincas = d);
    this.lagunaSvc.getAll().subscribe(d => this.todasLagunas = d);

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = idParam;
      this.svc.getById(this.id).subscribe(m => this.muestra = m);

      this.svc.getDetalleByMuestra(this.id).subscribe(detalles => {
        const grouped = new Map<string, CodigoLote>();
        for (const d of detalles) {
          const key = `${d.codigo}|${d.idCliente}|${d.idFinca}|${d.idLaguna}`;
          if (!grouped.has(key)) {
            grouped.set(key, {
              codigo: d.codigo,
              idCliente: d.idCliente as number,
              idFinca: d.idFinca as number,
              idLaguna: d.idLaguna as number,
              fincas: [],
              lagunas: [],
              calificaciones: [],
              promedio: 0
            });
          }
          grouped.get(key)!.calificaciones.push({ idPanelista: d.idPanelista, nota: d.calificacion });
        }
        this.codigos = Array.from(grouped.values());
        this.codigos.forEach(c => {
          this.calcularPromedio(c);
          if (c.idCliente) {
            this.fincaSvc.getActivasByCliente(c.idCliente).subscribe(f => c.fincas = f);
          }
          if (c.idFinca) {
            this.lagunaSvc.getActivasByFinca(c.idFinca).subscribe(l => c.lagunas = l);
          }
        });
      });
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
    }

    if (!this.soloLectura) {
      this.agregarCodigo();
    }
  }

  abrirFoto(path: string) { this.fotoAmpliada = path; }
  cerrarFoto() { this.fotoAmpliada = null; }

  agregarCodigo() {
    if (this.codigos.length >= 6) return;
    this.codigos.push({
      codigo: '',
      idCliente: 0,
      idFinca: 0,
      idLaguna: 0,
      fincas: [],
      lagunas: [],
      calificaciones: this.panelistasSeleccionados.map(id => ({ idPanelista: id, nota: 0 })),
      promedio: 0
    });
  }

  async obtenerUbicacion() {
    this.obteniendoGps = true;
    try {
      const { lat, lng } = await this.fotoSvc.obtenerUbicacion();
      this.muestra.latitud = lat;
      this.muestra.longitud = lng;
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

  togglePanelista(id: string | number, checked: boolean) {
    if (checked) {
      if (!this.panelistasSeleccionados.includes(id)) {
        this.panelistasSeleccionados.push(id);
      }
      this.codigos.forEach(c => {
        if (!c.calificaciones.find(cal => String(cal.idPanelista) === String(id))) {
          c.calificaciones.push({ idPanelista: id, nota: 0 });
        }
      });
    } else {
      this.panelistasSeleccionados = this.panelistasSeleccionados.filter(p => String(p) !== String(id));
      this.codigos.forEach(c => {
        c.calificaciones = c.calificaciones.filter(cal => String(cal.idPanelista) !== String(id));
        this.calcularPromedio(c);
      });
    }
  }

  onCodigoClienteChange(c: CodigoLote) {
    c.fincas = [];
    c.lagunas = [];
    if (c.idCliente) {
      this.fincaSvc.getActivasByCliente(c.idCliente).subscribe(d => c.fincas = d);
    }
  }

  onCodigoFincaChange(c: CodigoLote) {
    c.lagunas = [];
    if (c.idFinca) {
      this.lagunaSvc.getActivasByFinca(c.idFinca).subscribe(d => c.lagunas = d);
    }
  }

  calcularPromedio(c: CodigoLote) {
    if (!c.calificaciones.length) { c.promedio = 0; return; }
    c.promedio = Math.round((c.calificaciones.reduce((a, f) => a + f.nota, 0) / c.calificaciones.length) * 10) / 10;
  }

  estadoCodigo(c: CodigoLote): { texto: string; color: string } {
    if (c.promedio >= 9) return { texto: 'Aprobado', color: 'success' };
    if (c.promedio >= 7) return { texto: 'Revisar', color: 'warning' };
    return { texto: 'Rechazado', color: 'danger' };
  }

  nombreCliente(id: string | number): string {
    return this.clientes.find(c => String(c.id) === String(id))?.nombre || '';
  }

  nombreFinca(id: string | number): string {
    return this.todasFincas.find(f => String(f.id) === String(id))?.nombre || '';
  }

  nombreLaguna(id: string | number): string {
    return this.todasLagunas.find(l => String(l.id) === String(id))?.nombre || '';
  }

  nombrePanelista(id: string | number): string {
    return this.panelistas.find(p => String(p.id) === String(id))?.nombre || '';
  }

  async verificar() {
    const inputs = this.usuarios.map(u => ({
      type: 'radio' as const,
      label: u.nombre,
      value: u.id
    }));
    const a = await this.alert.create({
      header: 'Verificar Muestra de Sabor',
      message: 'Selecciona quién verifica:',
      inputs,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Confirmar',
          handler: (idVerifica) => {
            if (!idVerifica) return false;
            this.svc.update(this.id!, { estado: 'verificado', idUsuarioVerifica: idVerifica }).subscribe(() => {
              this.muestra.estado = 'verificado';
              this.muestra.idUsuarioVerifica = idVerifica;
              this.toast.create({ message: 'Muestra verificada correctamente.', duration: 2500, position: 'top', color: 'success' }).then(t => t.present());
            });
            return true;
          }
        }
      ]
    });
    await a.present();
  }

  async guardar() {
    if (!this.muestra.idUsuarioRealiza) {
      (await this.toast.create({ message: 'Selecciona quién realizó la muestra.', duration: 3000, position: 'top', color: 'warning' })).present();
      return;
    }
    if (this.panelistasSeleccionados.length < 3) {
      (await this.toast.create({ message: 'Debes seleccionar al menos 3 panelistas.', duration: 3000, position: 'top', color: 'warning' })).present();
      return;
    }
    const a = await this.alert.create({
      header: 'Confirmar',
      message: '¿Deseas guardar esta muestra de sabor?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: () => {
            this.svc.create(this.muestra).subscribe(async (creada) => {
              for (const cod of this.codigos) {
                for (const cal of cod.calificaciones) {
                  await firstValueFrom(this.svc.createDetalle({
                    idMuestra: creada.id!,
                    codigo: cod.codigo,
                    idCliente: cod.idCliente,
                    idFinca: cod.idFinca,
                    idLaguna: cod.idLaguna,
                    idPanelista: cal.idPanelista,
                    calificacion: cal.nota,
                    totalRespuestas: cod.calificaciones.length
                  }));
                }
              }
              for (const f of this.fotos) {
                await firstValueFrom(this.fotoSvc.createFoto({
                  idRegistro: creada.id!,
                  tipoRegistro: 'sabor',
                  pathLocal: f.nombreArchivo,
                  nombreArchivo: f.nombreArchivo,
                  latitud: this.muestra.latitud || 0,
                  longitud: this.muestra.longitud || 0,
                  fechaFoto: new Date().toISOString()
                }));
              }
              this.nav.navigateRoot('/calidades', { queryParams: { tipo: 'sabor' } });
            });
          }
        }
      ]
    });
    await a.present();
  }
}
