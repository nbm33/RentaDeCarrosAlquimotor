import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloVehiculo } from '../modelos/vehicolo.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  url = "http://localhost:3000";
  token: string = '';

  constructor(private http: HttpClient, private seguridadService: SeguridadService) { 
    this.token = this.seguridadService.ObtenerToken();
  }

  //Sin autenticación, el metodo get solo vinvula por http
  ObtenerVehiculos(): Observable<ModeloVehiculo[]> {
    return this.http.get<ModeloVehiculo[]>(`${this.url}/vehiculos`)
  }

  ObtenerVehiculosId(id: string): Observable<ModeloVehiculo> {
    return this.http.get<ModeloVehiculo>(`${this.url}/vehiculos/${id}`)
  }

  //Sin autenticación, el metodo post pide http y el body(atributos), requiere token, por medio de headers
  CrearVehiculos(vehiculo: ModeloVehiculo): Observable<ModeloVehiculo> {
    return this.http.post<ModeloVehiculo>(`${this.url}/vehiculos`, vehiculo, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  } 

  ActualizarVehiculos(vehiculo: ModeloVehiculo): Observable<ModeloVehiculo> {
    return this.http.put<ModeloVehiculo>(`${this.url}/vehiculos/${vehiculo.id}`, vehiculo, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarVehiculos(id: string): Observable<any> {
    return this.http.delete(`${this.url}/vehiculos/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  } 
}

