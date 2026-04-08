import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { AlertController, IonItemSliding, IonList, ModalController, ToastController } from '@ionic/angular';
import { LagunaService } from 'src/app/services/laguna.service';
import { FincaService } from 'src/app/services/finca.service';
import { Laguna } from 'src/app/models/laguna.model';
import { Finca } from 'src/app/models/finca.model';
import { LagunaFormComponent } from './laguna-form/laguna-form.component';
import { SlidingService } from 'src/app/services/sliding.service';

@Component({
  selector: 'app-lagunas',
  templateUrl: './lagunas.page.html',
  styleUrls: ['./lagunas.page.scss'],
  standalone: false,
})
export class LagunasPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(IonList) list!: IonList;
  lagunas: Laguna[] = [];
  fincas: Finca[] = [];
  busqueda = '';

  get lagunasFiltradas(): Laguna[] {
    const q = this.busqueda.toLowerCase().trim();
    if (!q) return this.lagunas;
    return this.lagunas.filter(l =>
      l.nombre.toLowerCase().includes(q) ||
      this.nombreFinca(l.idFinca).toLowerCase().includes(q) ||
      l.estado.toLowerCase().includes(q)
    );
  }

  constructor(
    private svc: LagunaService,
    private fincaSvc: FincaService,
    private modal: ModalController,
    private alert: AlertController,
    private toast: ToastController,
    private slidingService: SlidingService
  ) {}

  ngOnInit() {
    this.fincaSvc.getAll().subscribe(d => this.fincas = d);
    this.cargar();
  }
  ngAfterViewInit() { this.slidingService.registerList(this.list); }
  ngOnDestroy() { this.slidingService.unregisterList(this.list); }

  cargar(event?: any) {
    this.svc.getAll().subscribe(d => { this.lagunas = d; event?.target?.complete(); });
  }

  nombreFinca(id: string | number): string {
    return this.fincas.find(f => String(f.id) === String(id))?.nombre || '';
  }

  async abrirForm(laguna?: Laguna, slidingItem?: IonItemSliding) {
    if (slidingItem) await slidingItem.close();
    const m = await this.modal.create({
      component: LagunaFormComponent,
      componentProps: { laguna },
    });
    await m.present();
    const { data } = await m.onWillDismiss();
    if (!data) return;

    if (laguna) {
      this.svc.update(laguna.id!, { nombre: data.nombre, idFinca: data.idFinca }).subscribe(() => this.cargar());
    } else {
      this.svc.create({ nombre: data.nombre, idFinca: data.idFinca, estado: 'activo' }).subscribe(() => this.cargar());
    }
  }

  async toggleEstado(l: Laguna, slidingItem: IonItemSliding) {
    await slidingItem.close();
    this.svc.update(l.id!, { estado: l.estado === 'activo' ? 'inactivo' : 'activo' }).subscribe(() => this.cargar());
  }

  async eliminar(l: Laguna, slidingItem: IonItemSliding) {
    await slidingItem.close();
    const a = await this.alert.create({
      header: 'Confirmar',
      message: `¿Eliminar "${l.nombre}"?`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          handler: () => {
            this.svc.delete(l.id!).subscribe(async () => {
              this.cargar();
              (await this.toast.create({ message: 'Eliminado.', duration: 2000, position: 'top', color: 'success' })).present();
            });
          }
        }
      ]
    });
    await a.present();
  }
}
