import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-catalogos-menu',
  templateUrl: './catalogos-menu.page.html',
  styleUrls: ['./catalogos-menu.page.scss'],
  standalone: false,
})
export class CatalogosMenuPage {
  opciones = [
    { titulo: 'Clientes', ruta: '/catalogos/clientes', icon: 'business-outline' },
    { titulo: 'Fincas', ruta: '/catalogos/fincas', icon: 'leaf-outline' },
    { titulo: 'Lagunas', ruta: '/catalogos/lagunas', icon: 'water-outline' },
    { titulo: 'Usuarios', ruta: '/catalogos/usuarios', icon: 'people-outline' },
  ];

  constructor(private nav: NavController) {}

  irA(ruta: string) { this.nav.navigateForward(ruta); }
}
