import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalidadesListaPage } from './calidades-lista.page';

const routes: Routes = [{ path: '', component: CalidadesListaPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalidadesListaPageRoutingModule {}
