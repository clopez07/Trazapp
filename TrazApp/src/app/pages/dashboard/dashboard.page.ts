import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TrazabilidadService } from 'src/app/services/trazabilidad.service';
import { CalidadEnteroService } from 'src/app/services/calidad-entero.service';
import { MuestraSaborService } from 'src/app/services/muestra-sabor.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {
  totalBins = 0;
  totalCalidades = 0;
  totalSabores = 0;
  fechaHoy = new Date().toISOString().slice(0, 10);

  constructor(
    private trazabilidadSvc: TrazabilidadService,
    private calidadSvc: CalidadEnteroService,
    private saborSvc: MuestraSaborService,
    private nav: NavController
  ) {}

  ngOnInit() {
    this.cargarResumen();
  }

  cargarResumen() {
    this.trazabilidadSvc.getAllRecepciones().subscribe(data => {
      this.totalBins = data.length;
    });
    this.calidadSvc.getAll().subscribe(data => {
      this.totalCalidades = data.length;
    });
    this.saborSvc.getAll().subscribe(data => {
      this.totalSabores = data.length;
    });
  }

  irA(ruta: string) {
    this.nav.navigateForward(ruta);
  }
}
