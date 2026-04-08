import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { CameraSource } from '@capacitor/camera';
import { CalidadEnteroService } from 'src/app/services/calidad-entero.service';
import { TipoDefectoService } from 'src/app/services/tipo-defecto.service';
import { TrazabilidadService } from 'src/app/services/trazabilidad.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { FincaService } from 'src/app/services/finca.service';
import { LagunaService } from 'src/app/services/laguna.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FotoService } from 'src/app/services/foto.service';
import { CalidadEntero } from 'src/app/models/calidad-entero.model';
import { TipoDefecto } from 'src/app/models/tipo-defecto.model';
import { TrazabilidadRecepcion } from 'src/app/models/trazabilidad-recepcion.model';
import { Cliente } from 'src/app/models/cliente.model';
import { Finca } from 'src/app/models/finca.model';
import { Laguna } from 'src/app/models/laguna.model';
import { Usuario } from 'src/app/models/usuario.model';

interface FilaDefecto {
  tipo: TipoDefecto;
  cantidad: number;
}

@Component({
  selector: 'app-calidad-entero-form',
  templateUrl: './calidad-entero-form.page.html',
  styleUrls: ['./calidad-entero-form.page.scss'],
  standalone: false,
})
export class CalidadEnteroFormPage implements OnInit {
  id?: string;
  soloLectura = false;
  cameraSource = CameraSource;
  fotos: { pathLocal: string; nombreArchivo: string }[] = [];
  obteniendoGps = false;
  fotoAmpliada: string | null = null;

  recepciones: TrazabilidadRecepcion[] = [];
  clientes: Cliente[] = [];
  fincas: Finca[] = [];
  lagunas: Laguna[] = [];
  usuarios: Usuario[] = [];

  // Nombre display (solo lectura tras seleccionar lote)
  nombreCliente = '';
  nombreFinca = '';
  nombreLaguna = '';

  filasDefecto: FilaDefecto[] = [];

  calidad: CalidadEntero = {
    fecha: new Date().toISOString().slice(0, 10),
    turno: 'A',
    tipo: 'proceso',
    idRecepcion: 0,
    loteInterno: '',
    idCliente: 0,
    idFinca: 0,
    idLaguna: 0,
    gramos: 0,
    observacion: '',
    correccion: '',
    supervisor: '',
    idUsuarioRealiza: 0,
    estado: 'pendiente'
  };

  get filasDefectoSolo(): FilaDefecto[] {
    return this.filasDefecto.filter(f => !f.tipo.nombre.toLowerCase().includes('nitido') && !f.tipo.nombre.toLowerCase().includes('nítido'));
  }

  get filaNitido(): FilaDefecto | undefined {
    return this.filasDefecto.find(f => f.tipo.nombre.toLowerCase().includes('nitido') || f.tipo.nombre.toLowerCase().includes('nítido'));
  }

  get totalDefectos(): number {
    return this.filasDefectoSolo.reduce((a, f) => a + f.cantidad, 0);
  }

  get totalNitidos(): number {
    return this.filaNitido ? this.filaNitido.cantidad : 0;
  }

  get totalMuestra(): number {
    return this.filasDefecto.reduce((a, f) => a + f.cantidad, 0);
  }

  get pctDefectos(): string {
    if (this.totalMuestra === 0) return '0.0';
    return ((this.totalDefectos / this.totalMuestra) * 100).toFixed(1);
  }

  get pctNitidos(): string {
    if (this.totalMuestra === 0) return '0.0';
    return ((this.totalNitidos / this.totalMuestra) * 100).toFixed(1);
  }

  constructor(
    private route: ActivatedRoute,
    private svc: CalidadEnteroService,
    private tipoSvc: TipoDefectoService,
    private trazSvc: TrazabilidadService,
    private clienteSvc: ClienteService,
    private fincaSvc: FincaService,
    private lagunaSvc: LagunaService,
    private usuarioSvc: UsuarioService,
    private fotoSvc: FotoService,
    private nav: NavController,
    private toast: ToastController,
    private alert: AlertController
  ) {}

  ngOnInit() {
    this.trazSvc.getAllRecepciones().subscribe(r => this.recepciones = r);
    this.clienteSvc.getAll().subscribe(d => this.clientes = d);
    this.fincaSvc.getAll().subscribe(d => this.fincas = d);
    this.lagunaSvc.getAll().subscribe(d => this.lagunas = d);
    this.usuarioSvc.getAll().subscribe(d => this.usuarios = d);

    this.soloLectura = this.route.snapshot.queryParamMap.get('modo') === 'ver';

    this.tipoSvc.getActivos().subscribe(tipos => {
      this.filasDefecto = tipos.map(t => ({ tipo: t, cantidad: 0 }));

      const idParam = this.route.snapshot.paramMap.get('id');
      if (idParam) {
        this.id = idParam;
        this.svc.getById(this.id).subscribe(c => {
          this.calidad = c;
          this.actualizarNombres();
        });
        this.svc.getDetalleByCalidad(this.id).subscribe(detalles => {
          detalles.forEach(d => {
            const fila = this.filasDefecto.find(f => String(f.tipo.id) === String(d.idTipoDefecto));
            if (fila) fila.cantidad = d.cantidad;
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
    });
  }

  loteLabel(r: TrazabilidadRecepcion): string {
    const c = this.clientes.find(x => String(x.id) === String(r.idCliente))?.nombre || '';
    const f = this.fincas.find(x => String(x.id) === String(r.idFinca))?.nombre || '';
    const l = this.lagunas.find(x => String(x.id) === String(r.idLaguna))?.nombre || '';
    return `${r.loteInterno} · ${c} · ${f} · ${l}`;
  }

  onLoteChange() {
    const rec = this.recepciones.find(r => String(r.id) === String(this.calidad.idRecepcion));
    if (!rec) return;
    this.calidad.loteInterno = rec.loteInterno;
    this.calidad.idCliente = rec.idCliente;
    this.calidad.idFinca = rec.idFinca;
    this.calidad.idLaguna = rec.idLaguna;
    this.actualizarNombres();
  }

  private actualizarNombres() {
    const c = this.clientes.find(x => String(x.id) === String(this.calidad.idCliente));
    const f = this.fincas.find(x => String(x.id) === String(this.calidad.idFinca));
    const l = this.lagunas.find(x => String(x.id) === String(this.calidad.idLaguna));
    this.nombreCliente = c?.nombre || '';
    this.nombreFinca = f?.nombre || '';
    this.nombreLaguna = l?.nombre || '';
  }

  async obtenerUbicacion() {
    this.obteniendoGps = true;
    try {
      const { lat, lng } = await this.fotoSvc.obtenerUbicacion();
      this.calidad.latitud = lat;
      this.calidad.longitud = lng;
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

  // ── Slider ─────────────────────────────────────────────────────
  readonly SLIDER_MAX = 20;
  private dragFila: FilaDefecto | null = null;

  sliderStart(event: PointerEvent, fila: FilaDefecto) {
    if (this.soloLectura) return;
    this.dragFila = fila;
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
    this.applySlider(event);
  }

  sliderMove(event: PointerEvent, fila: FilaDefecto) {
    if (this.dragFila !== fila) return;
    this.applySlider(event);
  }

  sliderEnd() { this.dragFila = null; }

  private applySlider(event: PointerEvent) {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    if (this.dragFila) this.dragFila.cantidad = Math.round(ratio * this.SLIDER_MAX);
  }

  sliderPct(fila: FilaDefecto): number {
    return Math.min(100, ((fila.cantidad || 0) / this.SLIDER_MAX) * 100);
  }

  cambiarCantidad(fila: FilaDefecto, delta: number) {
    if (this.soloLectura) return;
    fila.cantidad = Math.max(0, (fila.cantidad || 0) + delta);
  }

  async verificar() {
    const inputs = this.usuarios.map(u => ({
      type: 'radio' as const,
      label: u.nombre,
      value: u.id
    }));
    const a = await this.alert.create({
      header: 'Verificar Evaluación',
      message: 'Selecciona quién verifica:',
      inputs,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Confirmar',
          handler: (idVerifica) => {
            if (!idVerifica) return false;
            this.svc.update(this.id!, { estado: 'verificado', idUsuarioVerifica: idVerifica }).subscribe(() => {
              this.calidad.estado = 'verificado';
              this.calidad.idUsuarioVerifica = idVerifica;
              this.toast.create({ message: 'Evaluación verificada correctamente.', duration: 2500, position: 'top', color: 'success' }).then(t => t.present());
            });
            return true;
          }
        }
      ]
    });
    await a.present();
  }

  async guardar() {
    if (!this.calidad.idRecepcion) {
      (await this.toast.create({ message: 'Selecciona un lote de recepción.', duration: 3000, position: 'top', color: 'warning' })).present();
      return;
    }
    if (!this.calidad.idUsuarioRealiza) {
      (await this.toast.create({ message: 'Selecciona quién realizó la evaluación.', duration: 3000, position: 'top', color: 'warning' })).present();
      return;
    }

    const a = await this.alert.create({
      header: 'Confirmar',
      message: '¿Deseas guardar esta evaluación?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: async () => {
            if (this.id) {
              this.svc.update(this.id, this.calidad).subscribe(() => this.nav.back());
            } else {
              this.svc.create(this.calidad).subscribe(async (creada) => {
                for (const fila of this.filasDefecto) {
                  await firstValueFrom(this.svc.createDetalle({
                    idCalidad: creada.id!,
                    idTipoDefecto: fila.tipo.id!,
                    cantidad: fila.cantidad,
                    esNitido: !!(fila.tipo.nombre.toLowerCase().includes('nitido') || fila.tipo.nombre.toLowerCase().includes('nítido'))
                  }));
                }
                for (const f of this.fotos) {
                  await firstValueFrom(this.fotoSvc.createFoto({
                    idRegistro: creada.id!,
                    tipoRegistro: 'calidad',
                    pathLocal: f.nombreArchivo,
                    nombreArchivo: f.nombreArchivo,
                    latitud: this.calidad.latitud || 0,
                    longitud: this.calidad.longitud || 0,
                    fechaFoto: new Date().toISOString()
                  }));
                }
                this.nav.navigateRoot('/calidades', { queryParams: { tipo: 'entero' } });
              });
            }
          }
        }
      ]
    });
    await a.present();
  }
}
