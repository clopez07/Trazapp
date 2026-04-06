import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecepcionesListaPage } from './recepciones-lista.page';

const routes: Routes = [{ path: '', component: RecepcionesListaPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecepcionesListaPageRoutingModule {}
