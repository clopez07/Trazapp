import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalidadEnteroFormPageRoutingModule } from './calidad-entero-form-routing.module';
import { CalidadEnteroFormPage } from './calidad-entero-form.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CalidadEnteroFormPageRoutingModule],
  declarations: [CalidadEnteroFormPage]
})
export class CalidadEnteroFormPageModule {}
