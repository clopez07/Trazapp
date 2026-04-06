import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MuestraSaborFormPageRoutingModule } from './muestra-sabor-form-routing.module';
import { MuestraSaborFormPage } from './muestra-sabor-form.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MuestraSaborFormPageRoutingModule],
  declarations: [MuestraSaborFormPage]
})
export class MuestraSaborFormPageModule {}
