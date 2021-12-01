import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as CryptoJS from 'crypto-js';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent {
  fbValitador = this.fb.group({
    usuario: ['', [Validators.required, Validators.email]],
    clave: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private servicioSeguridad: SeguridadService, private router: Router) { }

  onSubmit() {
    console.log(this.fbValitador.value);
    let usuario = this.fbValitador.controls['usuario'].value;
    let clave =  this.fbValitador.controls['clave'].value;
    let claveCifrada = CryptoJS.MD5(clave).toString();
    this.servicioSeguridad.Identificar(usuario,claveCifrada).subscribe((datos:any) => {
      this.servicioSeguridad.AlmacenarSesion(datos);
      alert("Alquimotor: Sus datos son correcto");
      this.router.navigate(["/inicio"])


    }, (error:any) => {
      //KO
      alert("Datos invalidos")
    }
    )
  }
}




