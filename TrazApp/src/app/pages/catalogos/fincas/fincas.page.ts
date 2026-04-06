import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { FincaService } from 'src/app/services/finca.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Finca } from 'src/app/models/finca.model';
import { Cliente } from 'src/app/models/cliente.model';
import { FincaFormComponent } from './finca-form/finca-form.component';

@Component({
  selector: 'app-fincas',
  templateUrl: './fincas.page.html',
  styleUrls: ['./fincas.page.scss'],
  standalone: false,
})
export class FincasPage implements OnInit {
  fincas: Finca[] = [];
  clientes: Cliente[] = [];
  busqueda = '';

  get fincasFiltradas(): Finca[] {
    const q = this.busqueda.toLowerCase().trim();
    if (!q) return this.fincas;
    return this.fincas.filter(f =>
      f.nombre.toLowerCase().includes(q) ||
      this.nombreCliente(f.idCliente).toLowerCase().includes(q) ||
      f.estado.toLowerCase().includes(q)
    );
  }

  constructor(
    private svc: FincaService,
    private clienteSvc: ClienteService,
    private modal: ModalController,
    private alert: AlertController,
    private toast: ToastController
  ) {}

  ngOnInit() {
    this.clienteSvc.getAll().subscribe(d => this.clientes = d);
    this.cargar();
  }

  cargar(event?: any) {
    this.svc.getAll().subscribe(d => { this.fincas = d; event?.target?.complete(); });
  }

  nombreCliente(id: string | number): string {
    return this.clientes.find(c => String(c.id) === String(id))?.nombre || '';
  }

  async abrirForm(finca?: Finca) {
    const m = await this.modal.create({
      component: FincaFormComponent,
      componentProps: { finca },
    });
    await m.present();
    const { data } = await m.onWillDismiss();
    if (!data) return;

    if (finca) {
      this.svc.update(finca.id!, { nombre: data.nombre, idCliente: data.idCliente }).subscribe(() => this.cargar());
    } else {
      this.svc.create({ nombre: data.nombre, idCliente: data.idCliente, estado: 'activo' }).subscribe(() => this.cargar());
    }
  }

  async toggleEstado(f: Finca) {
    this.svc.update(f.id!, { estado: f.estado === 'activo' ? 'inactivo' : 'activo' }).subscribe(() => this.cargar());
  }

  async eliminar(f: Finca) {
    const a = await this.alert.create({
      header: 'Confirmar',
      message: `¿Eliminar "${f.nombre}"?`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          handler: () => {
            this.svc.delete(f.id!).subscribe(async () => {
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
