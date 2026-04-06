import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecepcionDetallePageRoutingModule } from './recepcion-detalle-routing.module';
import { RecepcionDetallePage } from './recepcion-detalle.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RecepcionDetallePageRoutingModule],
  declarations: [RecepcionDetallePage]
})
export class RecepcionDetallePageModule {}
