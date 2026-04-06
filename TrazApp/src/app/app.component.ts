import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'grid' },
    { title: 'Recepciones', url: '/recepciones', icon: 'boat' },
    { title: 'Calidades', url: '/calidades', icon: 'flask' },
    { title: 'Catálogos', url: '/catalogos', icon: 'list' },
    { title: 'Tipos de Defecto', url: '/tipos-defecto', icon: 'settings' },
  ];

  constructor() {}
}
