export interface DetalleTalla {
  id?: string | number;
  idClasif: string | number;    // FK clasificacion_tallas
  rangoTalla: string;
  pesoGramos: number;
  cantidad: number;
  porcentaje: number;
}
