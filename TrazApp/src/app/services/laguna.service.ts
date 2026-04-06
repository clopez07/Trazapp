import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Laguna } from '../models/laguna.model';

@Injectable({
  providedIn: 'root'
})
export class LagunaService {
  private baseUrl = `${environment.apiUrl}/lagunas`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Laguna[]> {
    return this.http.get<Laguna[]>(this.baseUrl);
  }

  getByFinca(idFinca: string | number): Observable<Laguna[]> {
    return this.http.get<Laguna[]>(`${this.baseUrl}?idFinca=${idFinca}`);
  }

  getActivasByFinca(idFinca: string | number): Observable<Laguna[]> {
    return this.http.get<Laguna[]>(`${this.baseUrl}?idFinca=${idFinca}&estado=activo`);
  }

  getById(id: string | number): Observable<Laguna> {
    return this.http.get<Laguna>(`${this.baseUrl}/${id}`);
  }

  create(laguna: Laguna): Observable<Laguna> {
    return this.http.post<Laguna>(this.baseUrl, laguna);
  }

  update(id: string | number, data: Partial<Laguna>): Observable<Laguna> {
    return this.http.patch<Laguna>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
