export interface TipoDefecto {
  id?: string | number;
  nombre: string;
  descripcion: string;
  estado: 'activo' | 'inactivo';
}
