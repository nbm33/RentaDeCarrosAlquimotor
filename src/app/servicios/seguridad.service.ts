import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloDatos } from '../modelos/datos.modelo';
import { ModeloIdentificar } from '../modelos/identificar.modelo';


@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = "http://localhost:3000/";
  datosUsuarioEnSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());

  constructor(private http: HttpClient) { 
    this.VerificarSesionActiva();
  }

  Identificar(usuario:string, clave:string): Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarUsuario`, {
      usuario: usuario,
      clave: clave
    },{
      headers: new HttpHeaders({

      })
    })
  }

  AlmacenarSesion(datos: ModeloIdentificar) {
    datos.estaIdentificado = true;
    let stringIngreso = JSON.stringify(datos);
    localStorage.setItem("datosSesion",stringIngreso);
    this.RefrescarDatosSesion(datos);
  };

  ObtenerInformacionSesion() {
    let datosString = localStorage.getItem("datosSesion")
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos
    }else{
      return null;
    }
  }

  ObtenerDatosSesion(){
    return this.datosUsuarioEnSesion.asObservable();
  }

  EliminarInformacionSesion() {
    localStorage.removeItem("datosSesion")
    this.RefrescarDatosSesion(new ModeloIdentificar());
  }

  SeHaIniciadoSesion() {
    let datosString = localStorage.getItem("datosSesion");
    return datosString;
  }

  VerificarSesionActiva() {
    let datos = this.ObtenerInformacionSesion();
    if(datos){
      this.RefrescarDatosSesion(datos);
    }
  }

  RefrescarDatosSesion(datos: ModeloIdentificar){
    this.datosUsuarioEnSesion.next(datos);
  }

  
}
