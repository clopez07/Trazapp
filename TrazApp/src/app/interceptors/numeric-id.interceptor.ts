import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NumericIdInterceptor implements HttpInterceptor {
  constructor(private http: HttpClient) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== 'POST' || !req.body) {
      return next.handle(req);
    }

    // Obtener la URL base del recurso (ej: http://localhost:3000/detalle_bins)
    const url = req.url;

    return this.http.get<any[]>(url).pipe(
      switchMap(items => {
        const maxId = Array.isArray(items)
          ? items.reduce((max, item) => {
              const n = Number(item.id);
              return !isNaN(n) && n > max ? n : max;
            }, 0)
          : 0;

        const modifiedReq = req.clone({
          body: { id: maxId + 1, ...req.body }
        });

        return next.handle(modifiedReq);
      })
    );
  }
}
