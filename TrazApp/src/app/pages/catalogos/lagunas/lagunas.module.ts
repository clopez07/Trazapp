import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LagunasPageRoutingModule } from './lagunas-routing.module';
import { LagunasPage } from './lagunas.page';
import { LagunaFormComponent } from './laguna-form/laguna-form.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LagunasPageRoutingModule],
  declarations: [LagunasPage, LagunaFormComponent]
})
export class LagunasPageModule {}
