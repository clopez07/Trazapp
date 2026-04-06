export interface ClasificacionTallas {
  id?: string | number;
  fecha: string;
  turno: 'A' | 'B';
  tipo: 'proceso' | 'proxco';
  idRecepcion: string | number;        // FK trazabilidad_recepcion
  loteInterno: string;                 // denormalized
  idCliente: string | number;          // FK clientes (de la recepción)
  idFinca: string | number;            // FK fincas
  idLaguna: string | number;           // FK lagunas
  pesoMuestra: number;
  tallaDominante: string;              // calculado automáticamente
  idUsuarioRealiza: string | number;   // FK usuarios
  estado: 'pendiente' | 'verificado' | 'declinado';
  idUsuarioVerifica?: string | number; // FK usuarios (al validar)
  latitud?: number;
  longitud?: number;
}
