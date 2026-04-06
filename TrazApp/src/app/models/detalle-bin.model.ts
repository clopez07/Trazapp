export interface DetalleBin {
  id?: string | number;
  idRecepcion: string | number;         // FK trazabilidad_recepcion
  numeroBin: string;
  cantidadLibras: number;
  horaInicioProceso: string;   // Vacío hasta ser procesado
  estado: 'pendiente' | 'procesado';
}
