import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { AlertController, IonItemSliding, IonList, ModalController, ToastController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { SlidingService } from 'src/app/services/sliding.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
  standalone: false,
})
export class UsuariosPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(IonList) list!: IonList;
  usuarios: Usuario[] = [];
  busqueda = '';

  get usuariosFiltrados(): Usuario[] {
    const q = this.busqueda.toLowerCase().trim();
    if (!q) return this.usuarios;
    return this.usuarios.filter(u =>
      u.nombre.toLowerCase().includes(q) ||
      u.rol.toLowerCase().includes(q) ||
      u.correo.toLowerCase().includes(q) ||
      u.estado.toLowerCase().includes(q)
    );
  }

  constructor(
    private svc: UsuarioService,
    private modal: ModalController,
    private alert: AlertController,
    private toast: ToastController,
    private slidingService: SlidingService
  ) {}

  ngOnInit() { this.cargar(); }
  ngAfterViewInit() { this.slidingService.registerList(this.list); }
  ngOnDestroy() { this.slidingService.unregisterList(this.list); }

  cargar(event?: any) {
    this.svc.getAll().subscribe(d => { this.usuarios = d; event?.target?.complete(); });
  }

  async abrirForm(usuario?: Usuario, slidingItem?: IonItemSliding) {
    if (slidingItem) await slidingItem.close();
    const m = await this.modal.create({
      component: UsuarioFormComponent,
      componentProps: { usuario },
    });
    await m.present();
    const { data } = await m.onWillDismiss();
    if (!data) return;

    if (usuario) {
      this.svc.update(usuario.id!, { nombre: data.nombre, correo: data.correo, telefono: data.telefono, rol: data.rol }).subscribe(() => this.cargar());
    } else {
      this.svc.create({ nombre: data.nombre, correo: data.correo, telefono: data.telefono, rol: data.rol, estado: 'activo' }).subscribe(() => this.cargar());
    }
  }

  async toggleEstado(u: Usuario, slidingItem: IonItemSliding) {
    await slidingItem.close();
    this.svc.update(u.id!, { estado: u.estado === 'activo' ? 'inactivo' : 'activo' }).subscribe(() => this.cargar());
  }

  async eliminar(u: Usuario, slidingItem: IonItemSliding) {
    await slidingItem.close();
    const a = await this.alert.create({
      header: 'Confirmar',
      message: `¿Eliminar a "${u.nombre}"?`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          handler: () => {
            this.svc.delete(u.id!).subscribe(async () => {
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
