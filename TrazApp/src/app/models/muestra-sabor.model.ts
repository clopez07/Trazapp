export interface MuestraSabor {
  id?: string | number;
  fecha: string;
  tipo: 'proceso' | 'proxcos';
  turno: 'A' | 'B';
  idUsuarioRealiza: string | number;   // FK usuarios
  observaciones: string;
  estado: 'pendiente' | 'verificado' | 'declinado';
  idUsuarioVerifica?: string | number; // FK usuarios (al validar)
  latitud?: number;
  longitud?: number;
}
