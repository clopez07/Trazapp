import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecepcionFormPageRoutingModule } from './recepcion-form-routing.module';
import { RecepcionFormPage } from './recepcion-form.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RecepcionFormPageRoutingModule],
  declarations: [RecepcionFormPage]
})
export class RecepcionFormPageModule {}
