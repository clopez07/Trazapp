import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FincasPageRoutingModule } from './fincas-routing.module';
import { FincasPage } from './fincas.page';
import { FincaFormComponent } from './finca-form/finca-form.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FincasPageRoutingModule],
  declarations: [FincasPage, FincaFormComponent]
})
export class FincasPageModule {}
