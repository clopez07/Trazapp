export interface Cliente {
  id?: string | number;
  nombre: string;
  estado: 'activo' | 'inactivo';
}
