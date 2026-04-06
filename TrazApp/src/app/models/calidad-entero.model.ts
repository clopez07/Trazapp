export interface CalidadEntero {
  id?: string | number;
  fecha: string;
  turno: 'A' | 'B';
  tipo: 'proceso' | 'proxco';
  idRecepcion: string | number;          // FK trazabilidad_recepcion
  loteInterno: string;                   // denormalized para display rápido
  idCliente: string | number;            // FK clientes (de la recepción)
  idFinca: string | number;              // FK fincas
  idLaguna: string | number;             // FK lagunas
  gramos: number;
  observacion: string;
  correccion: string;
  supervisor: string;                    // texto libre, opcional
  idUsuarioRealiza: string | number;     // FK usuarios
  estado: 'pendiente' | 'verificado' | 'declinado';
  idUsuarioVerifica?: string | number;   // FK usuarios (al validar)
  latitud?: number;
  longitud?: number;
}
