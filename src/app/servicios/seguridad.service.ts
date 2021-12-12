import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { ModeloClave } from '../modelos/clave.modelo';
import { ModeloDatos } from '../modelos/datos.modelo';
import { ModeloIdentificar } from '../modelos/identificar.modelo';
import { ModeloRegistrar } from '../modelos/registrar.modelo';


@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = "http://localhost:3000/";
  datosUsuarioEnSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());
  rolUsuarioEnSesion = new BehaviorSubject<ModeloDatos>(new ModeloDatos());

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

  Registrar(nombre:string, apellido:string, correo:string, celular:string, rol:string): Observable<ModeloRegistrar>{
    return this.http.post<ModeloRegistrar>(`${this.url}/usuarios`, {
      Nombre: nombre,
      Apellido: apellido,
      CorreoElectronico: correo,
      Cedula: celular,
      Rol: rol
    },{
      headers: new HttpHeaders({

      })
    })
  }

  RecuperarClave(usuario:string): Observable<ModeloClave>{
    return this.http.post<ModeloClave>(`${this.url}/recuperarContrasena`, {
      usuario: usuario
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

  AlmacenarUsuario(datos: ModeloRegistrar) {
    let stringUsuario = JSON.stringify(datos);
    localStorage.setItem("datosUsuario",stringUsuario);
  };

  ObtenerUsuario() {
    let datosString = localStorage.getItem("datosUsuario");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos
    }else{
      return null;
    }
  };

  AlmacenarClave(datos: ModeloClave) {
    let stringUsuario = JSON.stringify(datos);
    localStorage.setItem("datosClave",stringUsuario);
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

  ObtenerRolSesion(){
    return this.rolUsuarioEnSesion.asObservable();
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

  ObtenerToken(){
    let datosString =localStorage.getItem("datosSesion");
    if (datosString){
      let datos= JSON.parse(datosString);
      return datos.tk;
    }
    else{
      return '';
    }
  }
}
