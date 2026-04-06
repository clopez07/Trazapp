import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuestraSaborFormPage } from './muestra-sabor-form.page';

const routes: Routes = [{ path: '', component: MuestraSaborFormPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuestraSaborFormPageRoutingModule {}
