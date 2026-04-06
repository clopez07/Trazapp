import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClasificacionTallasFormPage } from './clasificacion-tallas-form.page';

const routes: Routes = [{ path: '', component: ClasificacionTallasFormPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasificacionTallasFormPageRoutingModule {}
