import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = `${environment.apiUrl}/usuarios`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl);
  }

  getActivos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}?estado=activo`);
  }

  getPanelistas(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}?rol=panelista&estado=activo`);
  }

  getInspectores(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}?rol=inspector&estado=activo`);
  }

  getVerificadores(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}?rol=verificador&estado=activo`);
  }

  getById(id: string | number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/${id}`);
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario);
  }

  update(id: string | number, data: Partial<Usuario>): Observable<Usuario> {
    return this.http.patch<Usuario>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
