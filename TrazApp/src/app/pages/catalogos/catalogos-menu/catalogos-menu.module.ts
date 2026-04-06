import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CatalogosMenuPageRoutingModule } from './catalogos-menu-routing.module';
import { CatalogosMenuPage } from './catalogos-menu.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CatalogosMenuPageRoutingModule],
  declarations: [CatalogosMenuPage]
})
export class CatalogosMenuPageModule {}
