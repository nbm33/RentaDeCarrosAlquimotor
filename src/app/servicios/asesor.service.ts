import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloAsesor } from '../modelos/asesor.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AsesorService {
  url = 'http://localhost:3000';
  token: String = '';
  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
  }
  ObtenerRegistros(): Observable<ModeloAsesor[]> {
    return this.http.get<ModeloAsesor[]>(`${this.url}/asesores`);

  }
  ObtenerRegistrosporid(id: string): Observable<ModeloAsesor[]> {
    return this.http.get<ModeloAsesor[]>(`${this.url}/asesores/${id}`);

  }
  CrearAsesor(asesor: ModeloAsesor): Observable<ModeloAsesor> {
    return this.http.post<ModeloAsesor>(`${this.url}/asesores`, asesor, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarAsesor(asesor: ModeloAsesor): Observable<ModeloAsesor> {
    return this.http.put<ModeloAsesor>(`${this.url}/asesores`, asesor, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarAsesor(id: string): Observable<any> {
    return this.http.delete<ModeloAsesor>(`${this.url}/asesores/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }


}
