import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClasificacionTallas } from '../models/clasificacion-tallas.model';
import { DetalleTalla } from '../models/detalle-talla.model';

@Injectable({
  providedIn: 'root'
})
export class ClasificacionTallasService {
  private baseUrlClasif = `${environment.apiUrl}/clasificacion_tallas`;
  private baseUrlDetalle = `${environment.apiUrl}/detalle_tallas`;

  constructor(private http: HttpClient) {}

  // ── Clasificación ─────────────────────────────────────────────
  getAll(): Observable<ClasificacionTallas[]> {
    return this.http.get<ClasificacionTallas[]>(this.baseUrlClasif);
  }

  getById(id: string | number): Observable<ClasificacionTallas> {
    return this.http.get<ClasificacionTallas>(`${this.baseUrlClasif}/${id}`);
  }

  create(clasif: ClasificacionTallas): Observable<ClasificacionTallas> {
    return this.http.post<ClasificacionTallas>(this.baseUrlClasif, { ...clasif, id: String(Date.now()) });
  }

  update(id: string | number, data: Partial<ClasificacionTallas>): Observable<ClasificacionTallas> {
    return this.http.patch<ClasificacionTallas>(`${this.baseUrlClasif}/${id}`, data);
  }

  delete(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrlClasif}/${id}`);
  }

  // ── Detalle Tallas ────────────────────────────────────────────
  getDetalleByClasif(idClasif: string | number): Observable<DetalleTalla[]> {
    return this.http.get<DetalleTalla[]>(`${this.baseUrlDetalle}?idClasif=${idClasif}`);
  }

  createDetalle(detalle: DetalleTalla): Observable<DetalleTalla> {
    return this.http.post<DetalleTalla>(this.baseUrlDetalle, { ...detalle, id: String(Date.now()), idClasif: Number(detalle.idClasif) });
  }
}
