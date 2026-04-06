import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoDefecto } from '../models/tipo-defecto.model';

@Injectable({
  providedIn: 'root'
})
export class TipoDefectoService {
  private baseUrl = `${environment.apiUrl}/tipos_defecto`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<TipoDefecto[]> {
    return this.http.get<TipoDefecto[]>(this.baseUrl);
  }

  getActivos(): Observable<TipoDefecto[]> {
    return this.http.get<TipoDefecto[]>(`${this.baseUrl}?estado=activo`);
  }

  getById(id: string | number): Observable<TipoDefecto> {
    return this.http.get<TipoDefecto>(`${this.baseUrl}/${id}`);
  }

  create(tipo: TipoDefecto): Observable<TipoDefecto> {
    return this.http.post<TipoDefecto>(this.baseUrl, tipo);
  }

  update(id: string | number, data: Partial<TipoDefecto>): Observable<TipoDefecto> {
    return this.http.patch<TipoDefecto>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
