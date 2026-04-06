export interface Foto {
  id?: string | number;
  idRegistro: string | number;
  tipoRegistro: 'recepcion' | 'calidad' | 'tallas' | 'sabor';
  pathLocal: string;
  nombreArchivo: string;
  latitud: number;
  longitud: number;
  fechaFoto: string; // ISO
}
