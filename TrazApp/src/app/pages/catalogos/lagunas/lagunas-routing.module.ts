import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LagunasPage } from './lagunas.page';

const routes: Routes = [{ path: '', component: LagunasPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LagunasPageRoutingModule {}
