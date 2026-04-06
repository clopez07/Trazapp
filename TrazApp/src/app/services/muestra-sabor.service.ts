import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MuestraSabor } from '../models/muestra-sabor.model';
import { DetalleSabor } from '../models/detalle-sabor.model';

@Injectable({
  providedIn: 'root'
})
export class MuestraSaborService {
  private baseUrlMuestra = `${environment.apiUrl}/muestras_sabor`;
  private baseUrlDetalle = `${environment.apiUrl}/detalle_sabor`;

  constructor(private http: HttpClient) {}

  // ── Muestras Sabor ────────────────────────────────────────────
  getAll(): Observable<MuestraSabor[]> {
    return this.http.get<MuestraSabor[]>(this.baseUrlMuestra);
  }

  getById(id: string | number): Observable<MuestraSabor> {
    return this.http.get<MuestraSabor>(`${this.baseUrlMuestra}/${id}`);
  }

  create(muestra: MuestraSabor): Observable<MuestraSabor> {
    return this.http.post<MuestraSabor>(this.baseUrlMuestra, { ...muestra, id: String(Date.now()) });
  }

  update(id: string | number, data: Partial<MuestraSabor>): Observable<MuestraSabor> {
    return this.http.patch<MuestraSabor>(`${this.baseUrlMuestra}/${id}`, data);
  }

  delete(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrlMuestra}/${id}`);
  }

  // ── Detalle Sabor ─────────────────────────────────────────────
  getDetalleByMuestra(idMuestra: string | number): Observable<DetalleSabor[]> {
    return this.http.get<DetalleSabor[]>(`${this.baseUrlDetalle}?idMuestra=${idMuestra}`);
  }

  createDetalle(detalle: DetalleSabor): Observable<DetalleSabor> {
    return this.http.post<DetalleSabor>(this.baseUrlDetalle, { ...detalle, id: String(Date.now()), idMuestra: Number(detalle.idMuestra) });
  }
}
