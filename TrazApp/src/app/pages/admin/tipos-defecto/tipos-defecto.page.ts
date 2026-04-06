import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { TipoDefectoService } from 'src/app/services/tipo-defecto.service';
import { CalidadEnteroService } from 'src/app/services/calidad-entero.service';
import { TipoDefecto } from 'src/app/models/tipo-defecto.model';

@Component({
  selector: 'app-tipos-defecto',
  templateUrl: './tipos-defecto.page.html',
  styleUrls: ['./tipos-defecto.page.scss'],
  standalone: false,
})
export class TiposDefectoPage implements OnInit {
  tipos: TipoDefecto[] = [];

  constructor(
    private svc: TipoDefectoService,
    private calidadSvc: CalidadEnteroService,
    private alert: AlertController,
    private toast: ToastController
  ) {}

  ngOnInit() { this.cargar(); }

  cargar(event?: any) {
    this.svc.getAll().subscribe(d => { this.tipos = d; event?.target?.complete(); });
  }

  async abrirForm(tipo?: TipoDefecto) {
    const esEditar = !!tipo;
    const a = await this.alert.create({
      header: esEditar ? 'Editar Tipo de Defecto' : 'Nuevo Tipo de Defecto',
      inputs: [
        { name: 'nombre', type: 'text', placeholder: 'Nombre', value: tipo?.nombre || '' },
        { name: 'descripcion', type: 'text', placeholder: 'Descripción', value: tipo?.descripcion || '' }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: (data) => {
            if (!data.nombre?.trim()) return false;
            if (esEditar) {
              this.svc.update(tipo!.id!, { nombre: data.nombre, descripcion: data.descripcion }).subscribe(() => this.cargar());
            } else {
              this.svc.create({ nombre: data.nombre, descripcion: data.descripcion, estado: 'activo' }).subscribe(() => this.cargar());
            }
            return true;
          }
        }
      ]
    });
    await a.present();
  }

  async eliminar(t: TipoDefecto) {
    // Verificar si tiene registros asociados antes de eliminar
    this.calidadSvc.getDetalleByTipo(t.id!).subscribe(async (detalles) => {
      if (detalles.length > 0) {
        const aviso = await this.alert.create({
          header: 'No se puede eliminar',
          message: `"${t.nombre}" tiene ${detalles.length} registro(s) asociado(s). Solo puedes desactivarlo.`,
          buttons: ['Entendido']
        });
        await aviso.present();
        return;
      }
      const a = await this.alert.create({
        header: 'Eliminar tipo de defecto',
        message: `¿Eliminar "${t.nombre}"? Esta acción no se puede deshacer.`,
        buttons: [
          { text: 'Cancelar', role: 'cancel' },
          {
            text: 'Eliminar', role: 'destructive',
            handler: () => {
              this.svc.delete(t.id!).subscribe(async () => {
                this.cargar();
                (await this.toast.create({ message: 'Tipo de defecto eliminado.', duration: 2000, position: 'top', color: 'success' })).present();
              });
            }
          }
        ]
      });
      await a.present();
    });
  }

  async toggleEstado(t: TipoDefecto) {
    // Si tiene registros asociados, solo se desactiva (no se elimina)
    const nuevoEstado = t.estado === 'activo' ? 'inactivo' : 'activo';
    this.svc.update(t.id!, { estado: nuevoEstado }).subscribe(async () => {
      this.cargar();
      (await this.toast.create({
        message: `Tipo ${nuevoEstado === 'activo' ? 'activado' : 'desactivado'}.`,
        duration: 2000,
        position: 'top',
        color: 'success'
      })).present();
    });
  }
}
