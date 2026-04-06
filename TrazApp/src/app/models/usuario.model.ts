export interface Usuario {
  id?: string | number;
  nombre: string;
  rol: 'admin' | 'supervisor' | 'inspector' | 'verificador' | 'panelista' | 'operario';
  correo: string;
  telefono: string;
  estado: 'activo' | 'inactivo';
}
