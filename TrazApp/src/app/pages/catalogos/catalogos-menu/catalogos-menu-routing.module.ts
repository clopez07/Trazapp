import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogosMenuPage } from './catalogos-menu.page';

const routes: Routes = [{ path: '', component: CatalogosMenuPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogosMenuPageRoutingModule {}
