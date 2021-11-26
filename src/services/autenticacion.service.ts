import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Llaves} from '../config/llaves';
import {Usuario} from '../models';
import {UsuarioRepository} from '../repositories';
const generador= require("password-generator");
const cryptoJS= require("crypto-js");
const jwt = require("jsonwebtoken");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(/* Add @inject to inject parameters */
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository
    ) {
  }

  /*
   * Add service methods here
   */
  GenerarClave(){
    let clave = generador(8,false);
    return clave;
  }

  CifrarClave(clave: string){
    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }

  IdentificarPersona(usuario: string, clave: string){
    try{
      let u = this.usuarioRepository.findOne({where:{CorreoElectronico: usuario, Clave: clave}});
      if(u){
        return u;
      }
      return false;
    }
    catch{
      return false;
    }
  }

  GenerarTokenJWT(usuario: Usuario){
    let token = jwt.sign({
      data:{
        id : usuario.id,
        correo : usuario.CorreoElectronico,
        nombre : usuario.Nombre + " " + usuario.Apellido
      }
    },
    Llaves.claveJWT);
    return token;
  }

  ValidarTokenJWT(token: string){
    try{
      let datos= jwt.verify(token, Llaves.claveJWT);
      return datos;
    }
    catch{
      return false;
    }
  }

}
