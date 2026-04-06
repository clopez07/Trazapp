import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TiposDefectoPageRoutingModule } from './tipos-defecto-routing.module';
import { TiposDefectoPage } from './tipos-defecto.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TiposDefectoPageRoutingModule],
  declarations: [TiposDefectoPage]
})
export class TiposDefectoPageModule {}
