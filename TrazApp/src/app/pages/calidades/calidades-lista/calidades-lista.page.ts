import { Component, OnInit, AfterViewInit, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { AlertController, IonItemSliding, IonList, NavController, ToastController } from '@ionic/angular';
import { SlidingService } from 'src/app/services/sliding.service';
import { CalidadEnteroService } from 'src/app/services/calidad-entero.service';
import { ClasificacionTallasService } from 'src/app/services/clasificacion-tallas.service';
import { MuestraSaborService } from 'src/app/services/muestra-sabor.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CalidadEntero } from 'src/app/models/calidad-entero.model';
import { ClasificacionTallas } from 'src/app/models/clasificacion-tallas.model';
import { MuestraSabor } from 'src/app/models/muestra-sabor.model';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-calidades-lista',
  templateUrl: './calidades-lista.page.html',
  styleUrls: ['./calidades-lista.page.scss'],
  standalone: false,
})
export class CalidadesListaPage implements OnInit, AfterViewInit, OnDestroy, ViewWillEnter {
  @ViewChildren(IonList) lists!: QueryList<IonList>;
  private listsSub!: Subscription;
  tipoActivo: 'entero' | 'tallas' | 'sabor' | null = null;

  calidades: CalidadEntero[] = [];
  clasificaciones: ClasificacionTallas[] = [];
  sabores: MuestraSabor[] = [];
  usuarios: Usuario[] = [];

  busqueda = '';
  filtroTurno = '';
  filtroEstado = '';
  busquedaMenu = '';

  mostrarOpcionMenu(nombre: string): boolean {
    const q = this.busquedaMenu.toLowerCase().trim();
    return !q || nombre.toLowerCase().includes(q);
  }

  get calidadesFiltradas(): CalidadEntero[] {
    return this.calidades.filter(c => {
      const matchTurno = !this.filtroTurno || c.turno === this.filtroTurno;
      const matchEstado = !this.filtroEstado || c.estado === this.filtroEstado;
      const q = this.busqueda.toLowerCase();
      const matchBusqueda = !q ||
        (c.loteInterno || '').toLowerCase().includes(q) ||
        c.fecha.includes(q) ||
        (c.tipo || '').toLowerCase().includes(q);
      return matchTurno && matchEstado && matchBusqueda;
    });
  }

  get clasificacionesFiltradas(): ClasificacionTallas[] {
    return this.clasificaciones.filter(c => {
      const matchTurno = !this.filtroTurno || c.turno === this.filtroTurno;
      const matchEstado = !this.filtroEstado || c.estado === this.filtroEstado;
      const q = this.busqueda.toLowerCase();
      const matchBusqueda = !q ||
        (c.loteInterno || '').toLowerCase().includes(q) ||
        c.fecha.includes(q) ||
        (c.tipo || '').toLowerCase().includes(q);
      return matchTurno && matchEstado && matchBusqueda;
    });
  }

  get saboresFiltrados(): MuestraSabor[] {
    return this.sabores.filter(s => {
      const matchTurno = !this.filtroTurno || s.turno === this.filtroTurno;
      const matchEstado = !this.filtroEstado || s.estado === this.filtroEstado;
      const q = this.busqueda.toLowerCase();
      const matchBusqueda = !q ||
        s.fecha.includes(q) ||
        (s.tipo || '').toLowerCase().includes(q);
      return matchTurno && matchEstado && matchBusqueda;
    });
  }

  constructor(
    private route: ActivatedRoute,
    private calidadSvc: CalidadEnteroService,
    private tallasSvc: ClasificacionTallasService,
    private saborSvc: MuestraSaborService,
    private usuarioSvc: UsuarioService,
    public nav: NavController,
    private alert: AlertController,
    private toast: ToastController,
    private slidingService: SlidingService
  ) {}

  ngAfterViewInit() {
    this.listsSub = this.lists.changes.subscribe((lists: QueryList<IonList>) => {
      lists.forEach(l => this.slidingService.registerList(l));
    });
    this.lists.forEach(l => this.slidingService.registerList(l));
  }

  ngOnDestroy() {
    this.listsSub?.unsubscribe();
    this.lists?.forEach(l => this.slidingService.unregisterList(l));
  }

  ngOnInit() {
    this.usuarioSvc.getAll().subscribe(d => this.usuarios = d);
    const tipo = this.route.snapshot.queryParamMap.get('tipo') as 'entero' | 'tallas' | 'sabor' | null;
    if (tipo) {
      this.abrirTipo(tipo);
    }
  }

  ionViewWillEnter() {
    if (this.tipoActivo) {
      this.cargarTipo(this.tipoActivo);
    }
  }

  abrirTipo(tipo: 'entero' | 'tallas' | 'sabor') {
    this.tipoActivo = tipo;
    this.busqueda = '';
    this.filtroTurno = '';
    this.cargarTipo(tipo);
  }

  volverMenu() {
    this.tipoActivo = null;
  }

  private cargarTipo(tipo: 'entero' | 'tallas' | 'sabor') {
    if (tipo === 'entero') {
      this.calidadSvc.getAll().subscribe(d => this.calidades = d);
    } else if (tipo === 'tallas') {
      this.tallasSvc.getAll().subscribe(d => this.clasificaciones = d);
    } else {
      this.saborSvc.getAll().subscribe(d => this.sabores = d);
    }
  }

  cargar(event?: any) {
    if (this.tipoActivo) {
      this.cargarTipo(this.tipoActivo);
    }
    event?.target?.complete();
  }

  nuevo() {
    const rutas: Record<string, string> = {
      entero: '/calidad-entero-form',
      tallas: '/clasificacion-tallas-form',
      sabor: '/muestra-sabor-form'
    };
    if (this.tipoActivo) {
      this.nav.navigateForward(rutas[this.tipoActivo]);
    }
  }

  previsualizar(id: string | number) {
    this.nav.navigateForward(`/calidad-entero-form/${id}`, { queryParams: { modo: 'ver' } });
  }

  badgeEstado(estado: string): string {
    if (estado === 'verificado') return 'success';
    if (estado === 'declinado') return 'danger';
    return 'warning'; // pendiente
  }

  async validar(calidad: CalidadEntero, slidingItem?: IonItemSliding) {
    if (slidingItem) await slidingItem.close();
    const inputs = this.usuarios.map(u => ({ type: 'radio' as const, label: u.nombre, value: u.id }));
    const a = await this.alert.create({
      header: 'Validar Evaluación',
      message: 'Selecciona quién valida:',
      inputs,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Validar',
          handler: (idVerifica) => {
            if (!idVerifica) return false;
            this.calidadSvc.update(calidad.id!, { estado: 'verificado', idUsuarioVerifica: idVerifica }).subscribe(() => {
              calidad.estado = 'verificado';
              calidad.idUsuarioVerifica = idVerifica;
              this.toast.create({ message: 'Evaluación validada.', duration: 2500, position: 'top', color: 'success' }).then(t => t.present());
            });
            return true;
          }
        }
      ]
    });
    await a.present();
  }

  async declinar(calidad: CalidadEntero, slidingItem?: IonItemSliding) {
    if (slidingItem) await slidingItem.close();
    const a = await this.alert.create({
      header: 'Declinar Evaluación',
      message: '¿Seguro que deseas declinar esta evaluación?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Declinar', role: 'destructive',
          handler: () => {
            this.calidadSvc.update(calidad.id!, { estado: 'declinado' }).subscribe(() => {
              calidad.estado = 'declinado';
              this.toast.create({ message: 'Evaluación declinada.', duration: 2500, position: 'top', color: 'danger' }).then(t => t.present());
            });
          }
        }
      ]
    });
    await a.present();
  }

  async validarTallas(clasif: ClasificacionTallas, slidingItem?: IonItemSliding) {
    if (slidingItem) await slidingItem.close();
    const inputs = this.usuarios.map(u => ({ type: 'radio' as const, label: u.nombre, value: u.id }));
    const a = await this.alert.create({
      header: 'Validar Clasificación',
      message: 'Selecciona quién valida:',
      inputs,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Validar',
          handler: (idVerifica) => {
            if (!idVerifica) return false;
            this.tallasSvc.update(clasif.id!, { estado: 'verificado', idUsuarioVerifica: idVerifica }).subscribe(() => {
              clasif.estado = 'verificado';
              clasif.idUsuarioVerifica = idVerifica;
              this.toast.create({ message: 'Clasificación validada.', duration: 2500, position: 'top', color: 'success' }).then(t => t.present());
            });
            return true;
          }
        }
      ]
    });
    await a.present();
  }

  async declinarTallas(clasif: ClasificacionTallas, slidingItem?: IonItemSliding) {
    if (slidingItem) await slidingItem.close();
    const a = await this.alert.create({
      header: 'Declinar Clasificación',
      message: '¿Seguro que deseas declinar esta clasificación?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Declinar', role: 'destructive',
          handler: () => {
            this.tallasSvc.update(clasif.id!, { estado: 'declinado' }).subscribe(() => {
              clasif.estado = 'declinado';
              this.toast.create({ message: 'Clasificación declinada.', duration: 2500, position: 'top', color: 'danger' }).then(t => t.present());
            });
          }
        }
      ]
    });
    await a.present();
  }

  async validarSabor(sabor: MuestraSabor, slidingItem?: IonItemSliding) {
    if (slidingItem) await slidingItem.close();
    const inputs = this.usuarios.map(u => ({ type: 'radio' as const, label: u.nombre, value: u.id }));
    const a = await this.alert.create({
      header: 'Validar Muestra Sabor',
      message: 'Selecciona quién valida:',
      inputs,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Validar',
          handler: (idVerifica) => {
            if (!idVerifica) return false;
            this.saborSvc.update(sabor.id!, { estado: 'verificado', idUsuarioVerifica: idVerifica }).subscribe(() => {
              sabor.estado = 'verificado';
              sabor.idUsuarioVerifica = idVerifica;
              this.toast.create({ message: 'Muestra validada.', duration: 2500, position: 'top', color: 'success' }).then(t => t.present());
            });
            return true;
          }
        }
      ]
    });
    await a.present();
  }

  async declinarSabor(sabor: MuestraSabor, slidingItem?: IonItemSliding) {
    if (slidingItem) await slidingItem.close();
    const a = await this.alert.create({
      header: 'Declinar Muestra',
      message: '¿Seguro que deseas declinar esta muestra?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Declinar', role: 'destructive',
          handler: () => {
            this.saborSvc.update(sabor.id!, { estado: 'declinado' }).subscribe(() => {
              sabor.estado = 'declinado';
              this.toast.create({ message: 'Muestra declinada.', duration: 2500, position: 'top', color: 'danger' }).then(t => t.present());
            });
          }
        }
      ]
    });
    await a.present();
  }

  nombreUsuario(id: string | number | undefined): string {
    if (!id) return '';
    return this.usuarios.find(u => String(u.id) === String(id))?.nombre || '';
  }

  async eliminar(calidad: CalidadEntero, slidingItem?: IonItemSliding) {
    if (slidingItem) await slidingItem.close();
    const a = await this.alert.create({
      header: 'Eliminar evaluación',
      message: '¿Seguro que deseas eliminar esta evaluación? Esta acción no se puede deshacer.',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar', role: 'destructive',
          handler: () => {
            this.calidadSvc.delete(calidad.id!).subscribe(async () => {
              this.calidades = this.calidades.filter(c => c.id !== calidad.id);
              (await this.toast.create({ message: 'Evaluación eliminada.', duration: 2500, position: 'top', color: 'success' })).present();
            });
          }
        }
      ]
    });
    await a.present();
  }

  async eliminarTallas(clasif: ClasificacionTallas, slidingItem?: IonItemSliding) {
    if (slidingItem) await slidingItem.close();
    const a = await this.alert.create({
      header: 'Eliminar clasificación',
      message: '¿Seguro que deseas eliminar esta clasificación? Esta acción no se puede deshacer.',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar', role: 'destructive',
          handler: () => {
            this.tallasSvc.delete(clasif.id!).subscribe(async () => {
              this.clasificaciones = this.clasificaciones.filter(c => c.id !== clasif.id);
              (await this.toast.create({ message: 'Clasificación eliminada.', duration: 2500, position: 'top', color: 'success' })).present();
            });
          }
        }
      ]
    });
    await a.present();
  }

  async eliminarSabor(sabor: MuestraSabor, slidingItem?: IonItemSliding) {
    if (slidingItem) await slidingItem.close();
    const a = await this.alert.create({
      header: 'Eliminar muestra',
      message: '¿Seguro que deseas eliminar esta muestra de sabor? Esta acción no se puede deshacer.',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar', role: 'destructive',
          handler: () => {
            this.saborSvc.delete(sabor.id!).subscribe(async () => {
              this.sabores = this.sabores.filter(s => s.id !== sabor.id);
              (await this.toast.create({ message: 'Muestra eliminada.', duration: 2500, position: 'top', color: 'success' })).present();
            });
          }
        }
      ]
    });
    await a.present();
  }
}
