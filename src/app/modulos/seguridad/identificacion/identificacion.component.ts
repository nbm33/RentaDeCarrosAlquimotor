import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
const cryptoJS = require('cryptojs');

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

  constructor(private fb: FormBuilder, private servicioSeguridad: SeguridadService) { }

  onSubmit() {
    console.log(this.fbValitador.value);
    let usuario = this.fbValitador.controls['usuario'].value;
    let clave =  this.fbValitador.controls['clave'].value;
    let claveCifrada = cryptoJS.MD5(clave);
    this.servicioSeguridad.identificar(usuario, claveCifrada).subscribe((datos:any) => {
      alert("Ingreso correcto")
    }, (error:any) => {
      alert("Datos invalidos")
    }
    
    )
  }
}




