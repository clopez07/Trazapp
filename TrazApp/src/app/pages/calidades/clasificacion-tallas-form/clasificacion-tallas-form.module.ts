import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClasificacionTallasFormPageRoutingModule } from './clasificacion-tallas-form-routing.module';
import { ClasificacionTallasFormPage } from './clasificacion-tallas-form.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ClasificacionTallasFormPageRoutingModule],
  declarations: [ClasificacionTallasFormPage]
})
export class ClasificacionTallasFormPageModule {}
