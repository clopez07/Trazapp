import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalidadEnteroFormPage } from './calidad-entero-form.page';

const routes: Routes = [{ path: '', component: CalidadEnteroFormPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalidadEnteroFormPageRoutingModule {}
