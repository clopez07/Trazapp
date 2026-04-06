import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CalidadEntero } from '../models/calidad-entero.model';
import { DetalleCalidad } from '../models/detalle-calidad.model';

@Injectable({
  providedIn: 'root'
})
export class CalidadEnteroService {
  private baseUrlCalidad = `${environment.apiUrl}/calidad_entero`;
  private baseUrlDetalle = `${environment.apiUrl}/detalle_calidad`;

  constructor(private http: HttpClient) {}

  // ── Calidad Entero ────────────────────────────────────────────
  getAll(): Observable<CalidadEntero[]> {
    return this.http.get<CalidadEntero[]>(this.baseUrlCalidad);
  }

  getById(id: string | number): Observable<CalidadEntero> {
    return this.http.get<CalidadEntero>(`${this.baseUrlCalidad}/${id}`);
  }

  create(calidad: CalidadEntero): Observable<CalidadEntero> {
    return this.http.post<CalidadEntero>(this.baseUrlCalidad, { ...calidad, id: String(Date.now()) });
  }

  update(id: string | number, data: Partial<CalidadEntero>): Observable<CalidadEntero> {
    return this.http.patch<CalidadEntero>(`${this.baseUrlCalidad}/${id}`, data);
  }

  delete(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrlCalidad}/${id}`);
  }

  // ── Detalle Calidad ───────────────────────────────────────────
  getDetalleByCalidad(idCalidad: string | number): Observable<DetalleCalidad[]> {
    return this.http.get<DetalleCalidad[]>(`${this.baseUrlDetalle}?idCalidad=${idCalidad}`);
  }

  getDetalleByTipo(idTipoDefecto: string | number): Observable<DetalleCalidad[]> {
    return this.http.get<DetalleCalidad[]>(`${this.baseUrlDetalle}?idTipoDefecto=${idTipoDefecto}`);
  }

  createDetalle(detalle: DetalleCalidad): Observable<DetalleCalidad> {
    return this.http.post<DetalleCalidad>(this.baseUrlDetalle, { ...detalle, id: String(Date.now()), idCalidad: Number(detalle.idCalidad) });
  }
}
