export interface Finca {
  id?: string | number;
  nombre: string;
  idCliente: string | number;
  estado: 'activo' | 'inactivo';
}
