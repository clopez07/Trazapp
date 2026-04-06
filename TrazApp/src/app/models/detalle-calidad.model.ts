export interface DetalleCalidad {
  id?: string | number;
  idCalidad: string | number;     // FK calidad_entero
  idTipoDefecto: string | number; // FK tipos_defecto
  cantidad: number;
  esNitido: boolean;
}
