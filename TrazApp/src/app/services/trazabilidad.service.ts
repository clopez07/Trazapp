import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TrazabilidadRecepcion } from '../models/trazabilidad-recepcion.model';
import { DetalleBin } from '../models/detalle-bin.model';

@Injectable({
  providedIn: 'root'
})
export class TrazabilidadService {
  private baseUrlRecepcion = `${environment.apiUrl}/trazabilidad_recepcion`;
  private baseUrlBins = `${environment.apiUrl}/detalle_bins`;

  constructor(private http: HttpClient) {}

  // ── Recepciones ──────────────────────────────────────────────
  getAllRecepciones(): Observable<TrazabilidadRecepcion[]> {
    return this.http.get<TrazabilidadRecepcion[]>(this.baseUrlRecepcion);
  }

  getRecepcionById(id: string | number): Observable<TrazabilidadRecepcion> {
    return this.http.get<TrazabilidadRecepcion>(`${this.baseUrlRecepcion}/${id}`);
  }

  createRecepcion(recepcion: TrazabilidadRecepcion): Observable<TrazabilidadRecepcion> {
    return this.http.post<TrazabilidadRecepcion>(this.baseUrlRecepcion, { ...recepcion, id: String(Date.now()) });
  }

  updateRecepcion(id: string | number, data: Partial<TrazabilidadRecepcion>): Observable<TrazabilidadRecepcion> {
    return this.http.patch<TrazabilidadRecepcion>(`${this.baseUrlRecepcion}/${id}`, data);
  }

  deleteRecepcion(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrlRecepcion}/${id}`);
  }

  // ── Bins ──────────────────────────────────────────────────────
  getBinsByRecepcion(idRecepcion: string | number): Observable<DetalleBin[]> {
    return this.http.get<DetalleBin[]>(`${this.baseUrlBins}?idRecepcion=${idRecepcion}`);
  }

  createBin(bin: DetalleBin): Observable<DetalleBin> {
    return this.http.post<DetalleBin>(this.baseUrlBins, { ...bin, id: String(Date.now()), idRecepcion: Number(bin.idRecepcion) });
  }

  updateBin(id: number, data: Partial<DetalleBin>): Observable<DetalleBin> {
    return this.http.patch<DetalleBin>(`${this.baseUrlBins}/${id}`, data);
  }

  deleteBin(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrlBins}/${id}`);
  }

  procesarBin(id: string | number): Observable<DetalleBin> {
    const ahora = new Date();
    const horaInicioProceso = ahora.toTimeString().slice(0, 5); // HH:MM
    return this.http.patch<DetalleBin>(`${this.baseUrlBins}/${id}`, {
      horaInicioProceso,
      estado: 'procesado'
    });
  }
}
