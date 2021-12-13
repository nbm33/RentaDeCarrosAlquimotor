import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloTarjetaCredito } from '../modelos/tarjetacredito.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class TarjetaCreditoService {

  url = "http://localhost:3000";
  token:String=" ";


  constructor(private http: HttpClient, private seguridadService: SeguridadService) { 
    this.token = this.seguridadService.ObtenerToken();
  }

  ObtenerTarjetas(): Observable<ModeloTarjetaCredito[]> {
    return this.http.get<ModeloTarjetaCredito[]>(`${this.url}/tarjeta-creditos`)
  }

  CrearTarjetaCredito(tarjetacredito:ModeloTarjetaCredito): Observable<ModeloTarjetaCredito>{
    return this.http.post<ModeloTarjetaCredito>(`${this.url}/tarjeta-creditos`, tarjetacredito,{
      headers: new HttpHeaders({
        'Authorization':`Bearer${this.token}`
      })
    })
  }

  EliminarTarjetaCredito(id: string): Observable<any> {
    return this.http.delete(`${this.url}/tarjeta-creditos/${id}`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }


}
