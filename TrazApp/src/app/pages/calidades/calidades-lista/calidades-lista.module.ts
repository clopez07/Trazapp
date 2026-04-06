import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalidadesListaPageRoutingModule } from './calidades-lista-routing.module';
import { CalidadesListaPage } from './calidades-lista.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CalidadesListaPageRoutingModule],
  declarations: [CalidadesListaPage]
})
export class CalidadesListaPageModule {}
