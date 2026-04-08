import { Component, HostListener } from '@angular/core';
import { SlidingService } from './services/sliding.service';

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

  constructor(private slidingService: SlidingService) {}

  @HostListener('click', ['$event'])
  onGlobalClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('ion-item-option')) {
      this.slidingService.closeAll();
    }
  }
}
