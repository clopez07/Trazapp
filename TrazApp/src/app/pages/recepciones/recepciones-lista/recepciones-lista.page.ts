import { Component, OnInit } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { TrazabilidadService } from 'src/app/services/trazabilidad.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { FincaService } from 'src/app/services/finca.service';
import { LagunaService } from 'src/app/services/laguna.service';
import { TrazabilidadRecepcion } from 'src/app/models/trazabilidad-recepcion.model';
import { DetalleBin } from 'src/app/models/detalle-bin.model';
import { Cliente } from 'src/app/models/cliente.model';
import { Finca } from 'src/app/models/finca.model';
import { Laguna } from 'src/app/models/laguna.model';

interface RemisionConBins extends TrazabilidadRecepcion {
  bins: DetalleBin[];
  nombreCliente: string;
  nombreFinca: string;
  nombreLaguna: string;
  expandida: boolean;
}

@Component({
  selector: 'app-recepciones-lista',
  templateUrl: './recepciones-lista.page.html',
  styleUrls: ['./recepciones-lista.page.scss'],
  standalone: false,
})
export class RecepcionesListaPage implements OnInit, ViewWillEnter {
  remisiones: RemisionConBins[] = [];
  clientes: Cliente[] = [];
  fincas: Finca[] = [];
  lagunas: Laguna[] = [];
  busqueda = '';
  filtroTurno = '';

  constructor(
    private svc: TrazabilidadService,
    private clienteSvc: ClienteService,
    private fincaSvc: FincaService,
    private lagunaSvc: LagunaService,
    private nav: NavController,
    private alert: AlertController,
    private toast: ToastController
  ) {}

  ngOnInit() {
    this.clienteSvc.getAll().subscribe(d => this.clientes = d);
    this.fincaSvc.getAll().subscribe(d => this.fincas = d);
    this.lagunaSvc.getAll().subscribe(d => this.lagunas = d);
  }

  ionViewWillEnter() {
    this.cargar();
  }

  cargar(event?: any) {
    this.svc.getAllRecepciones().subscribe({
      next: (data) => {
        this.remisiones = (data || []).map(r => ({
          ...r,
          bins: [],
          nombreCliente: this.nombreCliente(r.idCliente),
          nombreFinca: this.nombreFinca(r.idFinca),
          nombreLaguna: this.nombreLaguna(r.idLaguna),
          expandida: false
        }));
        this.remisiones.forEach(r => {
          this.svc.getBinsByRecepcion(r.id!).subscribe(bins => r.bins = bins);
        });
        event?.target?.complete();
      },
      error: async (err) => {
        event?.target?.complete();
        (await this.toast.create({
          message: `Error al conectar a la API (${err?.status || 'sin estado'})`,
          duration: 4000, position: 'top', color: 'danger'
        })).present();
      }
    });
  }

  get remisionesFiltradas(): RemisionConBins[] {
    return this.remisiones.filter(r => {
      const matchTurno = !this.filtroTurno || r.turno === this.filtroTurno;
      const q = this.busqueda.toLowerCase();
      const matchBusqueda = !q ||
        r.loteInterno.toLowerCase().includes(q) ||
        r.nombreCliente.toLowerCase().includes(q) ||
        r.fecha.includes(q);
      return matchTurno && matchBusqueda;
    });
  }

  toggleExpandir(r: RemisionConBins) {
    r.expandida = !r.expandida;
  }

  async procesarBin(bin: DetalleBin, remision: RemisionConBins) {
    const a = await this.alert.create({
      header: 'Procesar Bin',
      message: `¿Registrar hora de proceso para ${bin.numeroBin}?\nHora actual: ${new Date().toTimeString().slice(0, 5)}`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Procesar',
          handler: () => {
            this.svc.procesarBin(bin.id!).subscribe(async (binActualizado) => {
              bin.estado = 'procesado';
              bin.horaInicioProceso = binActualizado.horaInicioProceso;
              (await this.toast.create({
                message: `Bin ${bin.numeroBin} procesado a las ${bin.horaInicioProceso}`,
                duration: 3000, position: 'top', color: 'success'
              })).present();
            });
          }
        }
      ]
    });
    await a.present();
  }

  editarRemision(id: string | number) {
    this.nav.navigateForward(`/recepcion-form/${id}`);
  }

  verRemision(id: string | number) {
    this.nav.navigateForward(`/recepcion-form/${id}`, { queryParams: { modo: 'ver' } });
  }

  todosProcesados(r: RemisionConBins): boolean {
    return r.bins.length > 0 && r.bins.every(b => b.estado === 'procesado');
  }

  nueva() {
    this.nav.navigateForward('/recepcion-form');
  }

  binsPendientes(r: RemisionConBins): number {
    return r.bins.filter(b => b.estado === 'pendiente').length;
  }

  // ── Helpers de nombre ─────────────────────────────────────────
  nombreCliente(id: string | number): string {
    return this.clientes.find(c => c.id === id)?.nombre || `Cliente ${id}`;
  }
  nombreFinca(id: string | number): string {
    return this.fincas.find(f => f.id === id)?.nombre || `Finca ${id}`;
  }
  nombreLaguna(id: string | number): string {
    return this.lagunas.find(l => l.id === id)?.nombre || `Laguna ${id}`;
  }
}
