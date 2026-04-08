import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { AlertController, IonItemSliding, IonList, ToastController } from '@ionic/angular';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente.model';
import { SlidingService } from 'src/app/services/sliding.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
  standalone: false,
})
export class ClientesPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(IonList) list!: IonList;
  clientes: Cliente[] = [];
  busqueda = '';

  get clientesFiltrados(): Cliente[] {
    const q = this.busqueda.toLowerCase().trim();
    if (!q) return this.clientes;
    return this.clientes.filter(c =>
      c.nombre.toLowerCase().includes(q) ||
      c.estado.toLowerCase().includes(q)
    );
  }

  constructor(
    private svc: ClienteService,
    private alert: AlertController,
    private toast: ToastController,
    private slidingService: SlidingService
  ) {}

  ngOnInit() { this.cargar(); }
  ngAfterViewInit() { this.slidingService.registerList(this.list); }
  ngOnDestroy() { this.slidingService.unregisterList(this.list); }

  cargar(event?: any) {
    this.svc.getAll().subscribe(d => { this.clientes = d; event?.target?.complete(); });
  }

  async abrirForm(cliente?: Cliente, slidingItem?: IonItemSliding) {
    if (slidingItem) await slidingItem.close();
    const esEditar = !!cliente;
    const a = await this.alert.create({
      header: esEditar ? 'Editar Cliente' : 'Nuevo Cliente',
      inputs: [
        { name: 'nombre', type: 'text', placeholder: 'Nombre', value: cliente?.nombre || '' }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: (data) => {
            if (!data.nombre.trim()) return false;
            if (esEditar) {
              this.svc.update(cliente!.id!, { nombre: data.nombre }).subscribe(() => this.cargar());
            } else {
              this.svc.create({ nombre: data.nombre, estado: 'activo' }).subscribe(() => this.cargar());
            }
            return true;
          }
        }
      ]
    });
    await a.present();
  }

  async toggleEstado(c: Cliente, slidingItem: IonItemSliding) {
    await slidingItem.close();
    const nuevoEstado = c.estado === 'activo' ? 'inactivo' : 'activo';
    this.svc.update(c.id!, { estado: nuevoEstado }).subscribe(() => this.cargar());
  }

  async eliminar(c: Cliente, slidingItem: IonItemSliding) {
    await slidingItem.close();
    const a = await this.alert.create({
      header: 'Confirmar',
      message: `¿Eliminar a "${c.nombre}"?`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          handler: () => {
            this.svc.delete(c.id!).subscribe(async () => {
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
