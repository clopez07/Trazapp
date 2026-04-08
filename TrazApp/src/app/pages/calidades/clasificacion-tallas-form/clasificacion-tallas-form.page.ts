import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { CameraSource } from '@capacitor/camera';
import { ClasificacionTallasService } from 'src/app/services/clasificacion-tallas.service';
import { TrazabilidadService } from 'src/app/services/trazabilidad.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { FincaService } from 'src/app/services/finca.service';
import { LagunaService } from 'src/app/services/laguna.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FotoService } from 'src/app/services/foto.service';
import { ClasificacionTallas } from 'src/app/models/clasificacion-tallas.model';
import { DetalleTalla } from 'src/app/models/detalle-talla.model';
import { TrazabilidadRecepcion } from 'src/app/models/trazabilidad-recepcion.model';
import { Cliente } from 'src/app/models/cliente.model';
import { Finca } from 'src/app/models/finca.model';
import { Laguna } from 'src/app/models/laguna.model';
import { Usuario } from 'src/app/models/usuario.model';

interface ItemTalla { peso: number; cantidad: number; }
interface GrupoTalla { rango: string; items: ItemTalla[]; }

const GRUPOS_DEF: { rango: string; pesos: number[] }[] = [
  { rango: '10-20',   pesos: [104, 90, 76, 64, 51] },
  { rango: '20-30',   pesos: [50, 44, 38, 34] },
  { rango: '30-40',   pesos: [33, 32, 31, 30, 29, 28, 27, 26] },
  { rango: '40-50',   pesos: [25, 24, 23, 22, 21] },
  { rango: '50-60',   pesos: [20, 19, 18, 17] },
  { rango: '60-70',   pesos: [16, 15] },
  { rango: '70-80',   pesos: [14, 13, 12, 11] },
  { rango: '100-120', pesos: [10, 9] },
  { rango: '120-150', pesos: [8, 7] },
  { rango: '150-200', pesos: [6, 5, 4, 3, 2] },
];

@Component({
  selector: 'app-clasificacion-tallas-form',
  templateUrl: './clasificacion-tallas-form.page.html',
  styleUrls: ['./clasificacion-tallas-form.page.scss'],
  standalone: false,
})
export class ClasificacionTallasFormPage implements OnInit {
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

  nombreCliente = '';
  nombreFinca = '';
  nombreLaguna = '';

  grupos: GrupoTalla[] = GRUPOS_DEF.map(g => ({
    rango: g.rango,
    items: g.pesos.map(p => ({ peso: p, cantidad: 0 }))
  }));

  clasif: ClasificacionTallas = {
    fecha: new Date().toISOString().slice(0, 10),
    turno: 'A',
    tipo: 'proceso',
    idRecepcion: 0,
    loteInterno: '',
    idCliente: 0,
    idFinca: 0,
    idLaguna: 0,
    pesoMuestra: 0,
    tallaDominante: '',
    idUsuarioRealiza: 0,
    estado: 'pendiente'
  };

  // ── Getters calculados ──────────────────────────────────────────
  subtotal(g: GrupoTalla): number {
    return g.items.reduce((a, i) => a + (i.cantidad || 0), 0);
  }

  pctGrupo(g: GrupoTalla): string {
    if (!this.clasif.pesoMuestra || this.clasif.pesoMuestra === 0) return '';
    const pct = (this.subtotal(g) / this.clasif.pesoMuestra) * 100;
    return pct > 0 ? '(' + pct.toFixed(1) + '%)' : '';
  }

  get totalCamarones(): number {
    return this.grupos.reduce((a, g) => a + this.subtotal(g), 0);
  }

  get tallaDominanteCalc(): string {
    let maxSub = 0, rango = '—';
    this.grupos.forEach(g => {
      const s = this.subtotal(g);
      if (s > maxSub) { maxSub = s; rango = g.rango; }
    });
    return maxSub > 0 ? rango : '—';
  }

  get coberturaCalc(): string {
    if (!this.clasif.pesoMuestra || this.clasif.pesoMuestra === 0) return '—';
    return (this.totalCamarones / this.clasif.pesoMuestra * 100).toFixed(1) + '%';
  }

  pctGrupoNum(g: GrupoTalla): number {
    if (!this.clasif.pesoMuestra || this.clasif.pesoMuestra === 0) return 0;
    return Math.min(100, (this.subtotal(g) / this.clasif.pesoMuestra) * 100);
  }

  // ── Slider ─────────────────────────────────────────────────────
  readonly SLIDER_MAX = 30;
  private dragItem: ItemTalla | null = null;

  sliderStart(event: PointerEvent, item: ItemTalla) {
    if (this.soloLectura) return;
    this.dragItem = item;
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
    this.applySlider(event);
  }

  sliderMove(event: PointerEvent, item: ItemTalla) {
    if (this.dragItem !== item) return;
    this.applySlider(event);
  }

  sliderEnd() { this.dragItem = null; }

  private applySlider(event: PointerEvent) {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
    if (this.dragItem) this.dragItem.cantidad = Math.round(ratio * this.SLIDER_MAX);
  }

  sliderPct(item: ItemTalla): number {
    return Math.min(100, ((item.cantidad || 0) / this.SLIDER_MAX) * 100);
  }

  cambiarCantidad(item: ItemTalla, delta: number) {
    if (this.soloLectura) return;
    item.cantidad = Math.max(0, (item.cantidad || 0) + delta);
  }

  constructor(
    private route: ActivatedRoute,
    private svc: ClasificacionTallasService,
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

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = idParam;
      this.svc.getById(this.id).subscribe(c => {
        this.clasif = c;
        this.actualizarNombres();
      });
      this.svc.getDetalleByClasif(this.id).subscribe(det => {
        det.forEach(d => {
          const grupo = this.grupos.find(g => g.rango === d.rangoTalla);
          if (grupo) {
            const item = grupo.items.find(i => i.peso === d.pesoGramos);
            if (item) item.cantidad = d.cantidad;
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
  }

  loteLabel(r: TrazabilidadRecepcion): string {
    const c = this.clientes.find(x => String(x.id) === String(r.idCliente))?.nombre || '';
    const f = this.fincas.find(x => String(x.id) === String(r.idFinca))?.nombre || '';
    const l = this.lagunas.find(x => String(x.id) === String(r.idLaguna))?.nombre || '';
    return `${r.loteInterno} · ${c} · ${f} · ${l}`;
  }

  onLoteChange() {
    const rec = this.recepciones.find(r => String(r.id) === String(this.clasif.idRecepcion));
    if (!rec) return;
    this.clasif.loteInterno = rec.loteInterno;
    this.clasif.idCliente = rec.idCliente;
    this.clasif.idFinca = rec.idFinca;
    this.clasif.idLaguna = rec.idLaguna;
    this.actualizarNombres();
  }

  private actualizarNombres() {
    this.nombreCliente = this.clientes.find(x => String(x.id) === String(this.clasif.idCliente))?.nombre || '';
    this.nombreFinca   = this.fincas.find(x => String(x.id) === String(this.clasif.idFinca))?.nombre || '';
    this.nombreLaguna  = this.lagunas.find(x => String(x.id) === String(this.clasif.idLaguna))?.nombre || '';
  }

  abrirFoto(path: string) { this.fotoAmpliada = path; }
  cerrarFoto() { this.fotoAmpliada = null; }

  async obtenerUbicacion() {
    this.obteniendoGps = true;
    try {
      const { lat, lng } = await this.fotoSvc.obtenerUbicacion();
      this.clasif.latitud = lat;
      this.clasif.longitud = lng;
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

  async verificar() {
    const inputs = this.usuarios.map(u => ({
      type: 'radio' as const,
      label: u.nombre,
      value: u.id
    }));
    const a = await this.alert.create({
      header: 'Verificar Clasificación',
      message: 'Selecciona quién verifica:',
      inputs,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Confirmar',
          handler: (idVerifica) => {
            if (!idVerifica) return false;
            this.svc.update(this.id!, { estado: 'verificado', idUsuarioVerifica: idVerifica }).subscribe(() => {
              this.clasif.estado = 'verificado';
              this.clasif.idUsuarioVerifica = idVerifica;
              this.toast.create({ message: 'Clasificación verificada correctamente.', duration: 2500, position: 'top', color: 'success' }).then(t => t.present());
            });
            return true;
          }
        }
      ]
    });
    await a.present();
  }

  async guardar() {
    if (!this.clasif.idRecepcion) {
      (await this.toast.create({ message: 'Selecciona un lote de recepción.', duration: 3000, position: 'top', color: 'warning' })).present();
      return;
    }
    if (!this.clasif.idUsuarioRealiza) {
      (await this.toast.create({ message: 'Selecciona quién realizó la clasificación.', duration: 3000, position: 'top', color: 'warning' })).present();
      return;
    }

    // Actualizar talla dominante antes de guardar
    this.clasif.tallaDominante = this.tallaDominanteCalc;

    const a = await this.alert.create({
      header: 'Confirmar',
      message: '¿Deseas guardar esta clasificación?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: () => {
            if (this.id) {
              this.svc.update(this.id, this.clasif).subscribe(() => this.nav.back());
            } else {
              this.svc.create(this.clasif).subscribe(async (creada) => {
                const filas: DetalleTalla[] = this.grupos.reduce((acc: DetalleTalla[], g: GrupoTalla) => {
                  const items: DetalleTalla[] = g.items.map((i: ItemTalla) => ({
                    idClasif: creada.id!,
                    rangoTalla: g.rango,
                    pesoGramos: i.peso,
                    cantidad: i.cantidad || 0,
                    porcentaje: this.totalCamarones > 0
                      ? parseFloat((i.cantidad / this.totalCamarones * 100).toFixed(1))
                      : 0
                  }));
                  return acc.concat(items);
                }, []);
                for (const fila of filas) {
                  await firstValueFrom(this.svc.createDetalle(fila));
                }
                for (const f of this.fotos) {
                  await firstValueFrom(this.fotoSvc.createFoto({
                    idRegistro: creada.id!,
                    tipoRegistro: 'tallas',
                    pathLocal: f.nombreArchivo,
                    nombreArchivo: f.nombreArchivo,
                    latitud: this.clasif.latitud || 0,
                    longitud: this.clasif.longitud || 0,
                    fechaFoto: new Date().toISOString()
                  }));
                }
                this.nav.navigateRoot('/calidades', { queryParams: { tipo: 'tallas' } });
              });
            }
          }
        }
      ]
    });
    await a.present();
  }
}
