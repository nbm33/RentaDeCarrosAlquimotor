import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPuntoAlquiler } from '../modelos/puntoAlquiler.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class PuntoAlquilerService {
  
  url = "http://localhost:3000";
  token: string = '';

  constructor(private http: HttpClient, private seguridadService: SeguridadService) { 
    this.token = this.seguridadService.ObtenerToken();
  }

  //Sin autenticación, el metodo get solo vinvula por http
  ObtenerPuntos(): Observable<ModeloPuntoAlquiler[]> {
    return this.http.get<ModeloPuntoAlquiler[]>(`${this.url}/punto-alquilers`)
  }

  ObtenerPuntoId(id: string): Observable<ModeloPuntoAlquiler> {
    return this.http.get<ModeloPuntoAlquiler>(`${this.url}/punto-alquilers/${id}`)
  }

  //Sin autenticación, el metodo post pide http y el body(atributos), requiere token, por medio de headers
  CrearPunto(puntoAlquiler: ModeloPuntoAlquiler): Observable<ModeloPuntoAlquiler> {
    return this.http.post<ModeloPuntoAlquiler>(`${this.url}/punto-alquilers`, puntoAlquiler, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  } 

  ActualizarPunto(puntoAlquiler: ModeloPuntoAlquiler): Observable<ModeloPuntoAlquiler> {
    return this.http.put<ModeloPuntoAlquiler>(`${this.url}/punto-alquilers/${puntoAlquiler.id}`, puntoAlquiler, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarPunto(id: string): Observable<any> {
    return this.http.delete(`${this.url}/punto-alquilers/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  } 
}
