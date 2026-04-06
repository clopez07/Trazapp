import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente.model';
import { Finca } from 'src/app/models/finca.model';

@Component({
  selector: 'app-finca-form',
  templateUrl: './finca-form.component.html',
  standalone: false,
})
export class FincaFormComponent implements OnInit {
  @Input() finca?: Finca;

  nombre = '';
  idCliente: string | number = '';
  clientes: Cliente[] = [];

  compareById = (a: any, b: any) => String(a) === String(b);

  constructor(
    private modalCtrl: ModalController,
    private clienteSvc: ClienteService,
    private toast: ToastController
  ) {}

  ngOnInit() {
    this.clienteSvc.getActivos().subscribe(clientes => {
      this.clientes = clientes;
      if (this.finca) {
        this.nombre = this.finca.nombre;
        this.idCliente = this.finca.idCliente;
      }
    });
  }

  async guardar() {
    if (!this.nombre.trim()) {
      (await this.toast.create({ message: 'El nombre es requerido.', duration: 2000, position: 'top', color: 'warning' })).present();
      return;
    }
    if (!this.idCliente) {
      (await this.toast.create({ message: 'Selecciona un cliente.', duration: 2000, position: 'top', color: 'warning' })).present();
      return;
    }
    this.modalCtrl.dismiss({ nombre: this.nombre.trim(), idCliente: this.idCliente });
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }
}
