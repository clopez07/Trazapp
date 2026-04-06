import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecepcionDetallePage } from './recepcion-detalle.page';

const routes: Routes = [{ path: '', component: RecepcionDetallePage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecepcionDetallePageRoutingModule {}
