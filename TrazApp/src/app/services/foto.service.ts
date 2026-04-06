import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Camera, CameraSource, CameraResultType } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Geolocation } from '@capacitor/geolocation';
import { environment } from 'src/environments/environment';
import { Foto } from '../models/foto.model';

@Injectable({
  providedIn: 'root'
})
export class FotoService {
  private baseUrl = `${environment.apiUrl}/fotos`;

  constructor(private http: HttpClient) {}

  // ── API ───────────────────────────────────────────────────────
  getFotosByRegistro(idRegistro: string | number): Observable<Foto[]> {
    return this.http.get<Foto[]>(`${this.baseUrl}?idRegistro=${idRegistro}`);
  }

  createFoto(foto: Foto): Observable<Foto> {
    return this.http.post<Foto>(this.baseUrl, { ...foto, id: String(Date.now()), idRegistro: Number(foto.idRegistro) });
  }

  deleteFoto(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // ── Cámara + Filesystem ───────────────────────────────────────
  async tomarOSeleccionarFoto(source: CameraSource): Promise<{ pathLocal: string; nombreArchivo: string }> {
    const photo = await Camera.getPhoto({
      quality: 40,
      width: 800,
      height: 800,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source
    });

    if (!photo.base64String) throw new Error('No base64');

    const nombreArchivo = `IMG_${Date.now()}.jpeg`;

    await Filesystem.writeFile({
      path: nombreArchivo,
      data: photo.base64String,
      directory: Directory.Data
    });

    let pathLocal = '';
    if (Capacitor.getPlatform() === 'web') {
      pathLocal = `data:image/jpeg;base64,${photo.base64String}`;
    } else {
      const fileUri = await Filesystem.getUri({ directory: Directory.Data, path: nombreArchivo });
      pathLocal = Capacitor.convertFileSrc(fileUri.uri);
    }

    return { pathLocal, nombreArchivo };
  }

  async obtenerPathVisible(pathLocal: string): Promise<string> {
    if (!pathLocal || pathLocal.startsWith('data:image')) return pathLocal;

    if (Capacitor.getPlatform() === 'web') {
      const file = await Filesystem.readFile({ path: pathLocal, directory: Directory.Data });
      return `data:image/jpeg;base64,${file.data}`;
    }

    const fileUri = await Filesystem.getUri({ directory: Directory.Data, path: pathLocal });
    return Capacitor.convertFileSrc(fileUri.uri);
  }

  async borrarFotoLocal(nombreArchivo: string): Promise<void> {
    await Filesystem.deleteFile({ path: nombreArchivo, directory: Directory.Data });
  }

  // ── GPS ───────────────────────────────────────────────────────
  async obtenerUbicacion(): Promise<{ lat: number; lng: number }> {
    const pos = await Geolocation.getCurrentPosition({ enableHighAccuracy: true });
    return { lat: pos.coords.latitude, lng: pos.coords.longitude };
  }
}
