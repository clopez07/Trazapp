import { Component, Input, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ClienteService } from 'src/app/services/cliente.service';
import { FincaService } from 'src/app/services/finca.service';
import { Cliente } from 'src/app/models/cliente.model';
import { Finca } from 'src/app/models/finca.model';
import { Laguna } from 'src/app/models/laguna.model';

@Component({
  selector: 'app-laguna-form',
  templateUrl: './laguna-form.component.html',
  standalone: false,
})
export class LagunaFormComponent implements OnInit {
  @Input() laguna?: Laguna;

  nombre = '';
  idCliente: string | number = '';
  idFinca: string | number = '';

  clientes: Cliente[] = [];
  fincas: Finca[] = [];

  compareById = (a: any, b: any) => String(a) === String(b);

  constructor(
    private modalCtrl: ModalController,
    private clienteSvc: ClienteService,
    private fincaSvc: FincaService,
    private toast: ToastController
  ) {}

  ngOnInit() {
    this.clienteSvc.getActivos().subscribe(clientes => {
      this.clientes = clientes;
      if (this.laguna) {
        this.nombre = this.laguna.nombre;
        this.fincaSvc.getById(this.laguna.idFinca).subscribe(finca => {
          this.idCliente = finca.idCliente;
          this.fincaSvc.getActivasByCliente(this.idCliente).subscribe(fincas => {
            this.fincas = fincas;
            // Asignar idFinca después de cargar fincas para que ion-select muestre el label
            this.idFinca = this.laguna!.idFinca;
          });
        });
      }
    });
  }

  onClienteChange() {
    this.idFinca = '';
    this.fincas = [];
    if (this.idCliente) {
      this.fincaSvc.getActivasByCliente(this.idCliente).subscribe(d => this.fincas = d);
    }
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
    if (!this.idFinca) {
      (await this.toast.create({ message: 'Selecciona una finca.', duration: 2000, position: 'top', color: 'warning' })).present();
      return;
    }
    this.modalCtrl.dismiss({ nombre: this.nombre.trim(), idFinca: this.idFinca });
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }
}
