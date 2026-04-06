import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { TrazabilidadService } from 'src/app/services/trazabilidad.service';
import { TrazabilidadRecepcion } from 'src/app/models/trazabilidad-recepcion.model';
import { DetalleBin } from 'src/app/models/detalle-bin.model';

@Component({
  selector: 'app-recepcion-detalle',
  templateUrl: './recepcion-detalle.page.html',
  styleUrls: ['./recepcion-detalle.page.scss'],
  standalone: false,
})
export class RecepcionDetallePage implements OnInit {
  id!: string;
  recepcion?: TrazabilidadRecepcion;
  bins: DetalleBin[] = [];

  constructor(
    private route: ActivatedRoute,
    private svc: TrazabilidadService,
    private nav: NavController,
    private alert: AlertController,
    private toast: ToastController
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.cargar();
  }

  cargar() {
    this.svc.getRecepcionById(this.id).subscribe(r => this.recepcion = r);
    this.svc.getBinsByRecepcion(this.id).subscribe(b => this.bins = b);
  }

  editar() {
    this.nav.navigateForward(`/recepcion-form/${this.id}`);
  }

  async eliminar() {
    const a = await this.alert.create({
      header: 'Confirmar',
      message: '¿Deseas eliminar esta recepción?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          handler: () => {
            this.svc.deleteRecepcion(this.id).subscribe(async () => {
              (await this.toast.create({
                message: 'Recepción eliminada.',
                duration: 2000,
                position: 'top',
                color: 'success'
              })).present();
              this.nav.back();
            });
          }
        }
      ]
    });
    await a.present();
  }

  agregarBin() {
    this.nav.navigateForward(`/recepcion-form/${this.id}`);
  }
}
