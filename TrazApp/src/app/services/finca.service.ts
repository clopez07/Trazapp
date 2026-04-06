import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Finca } from '../models/finca.model';

@Injectable({
  providedIn: 'root'
})
export class FincaService {
  private baseUrl = `${environment.apiUrl}/fincas`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Finca[]> {
    return this.http.get<Finca[]>(this.baseUrl);
  }

  getByCliente(idCliente: string | number): Observable<Finca[]> {
    return this.http.get<Finca[]>(`${this.baseUrl}?idCliente=${idCliente}`);
  }

  getActivasByCliente(idCliente: string | number): Observable<Finca[]> {
    return this.http.get<Finca[]>(`${this.baseUrl}?idCliente=${idCliente}&estado=activo`);
  }

  getById(id: string | number): Observable<Finca> {
    return this.http.get<Finca>(`${this.baseUrl}/${id}`);
  }

  create(finca: Finca): Observable<Finca> {
    return this.http.post<Finca>(this.baseUrl, finca);
  }

  update(id: string | number, data: Partial<Finca>): Observable<Finca> {
    return this.http.patch<Finca>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
