export interface TrazabilidadRecepcion {
  id?: string | number;
  loteInterno: string;        // Auto: fecha-idCliente-idFinca-idLaguna
  fecha: string;              // YYYY-MM-DD
  turno: 'A' | 'B';
  idCliente: string | number;          // FK clientes
  idFinca: string | number;            // FK fincas
  idLaguna: string | number;           // FK lagunas
  fechaCosecha: string;       // YYYY-MM-DD
  horaCosecha: string;        // HH:MM
  horaRecibido: string;       // HH:MM
  idUsuarioRealiza: string | number;   // FK usuarios
  idUsuarioVerifica: string | number;  // FK usuarios
  remisionSAG: string;
  numeroAutorizacion: string;
  observaciones: string;
  correcciones: string;
  latitud?: number;
  longitud?: number;
}
