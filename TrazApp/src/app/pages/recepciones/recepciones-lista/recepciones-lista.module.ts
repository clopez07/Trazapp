import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecepcionesListaPageRoutingModule } from './recepciones-lista-routing.module';
import { RecepcionesListaPage } from './recepciones-lista.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RecepcionesListaPageRoutingModule],
  declarations: [RecepcionesListaPage]
})
export class RecepcionesListaPageModule {}
