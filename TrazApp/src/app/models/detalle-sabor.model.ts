export interface DetalleSabor {
  id?: string | number;
  idMuestra: string | number;    // FK muestras_sabor
  codigo: string;
  idCliente: string | number;    // FK clientes
  idFinca: string | number;      // FK fincas
  idLaguna: string | number;     // FK lagunas
  idPanelista: string | number;  // FK usuarios
  calificacion: number; // 0–10
  totalRespuestas: number;
}
