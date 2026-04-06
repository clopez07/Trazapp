import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  standalone: false,
})
export class UsuarioFormComponent implements OnInit {
  @Input() usuario?: Usuario;

  nombre = '';
  correo = '';
  telefono = '';
  rol: Usuario['rol'] | '' = '';

  roles: { value: Usuario['rol']; label: string }[] = [
    { value: 'admin', label: 'Admin' },
    { value: 'supervisor', label: 'Supervisor' },
    { value: 'operario', label: 'Operario' },
    { value: 'panelista', label: 'Panelista' },
  ];

  constructor(
    private modalCtrl: ModalController,
    private toast: ToastController
  ) {}

  ngOnInit() {
    if (this.usuario) {
      this.nombre = this.usuario.nombre;
      this.correo = this.usuario.correo;
      this.telefono = this.usuario.telefono;
      this.rol = this.usuario.rol;
    }
  }

  async guardar() {
    if (!this.nombre.trim()) {
      (await this.toast.create({ message: 'El nombre es requerido.', duration: 2000, position: 'top', color: 'warning' })).present();
      return;
    }
    if (!this.rol) {
      (await this.toast.create({ message: 'Selecciona un rol.', duration: 2000, position: 'top', color: 'warning' })).present();
      return;
    }
    this.modalCtrl.dismiss({
      nombre: this.nombre.trim(),
      correo: this.correo.trim(),
      telefono: this.telefono.trim(),
      rol: this.rol,
    });
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }
}
