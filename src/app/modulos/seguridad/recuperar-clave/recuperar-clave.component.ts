import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';


@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})
export class RecuperarClaveComponent {
  fbValitador = this.fb.group({
    usuario: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private servicioSeguridad: SeguridadService, private router: Router) { }
  
  onSubmit() {
    console.log(this.fbValitador.value);
    let usuario = this.fbValitador.controls['usuario'].value;
    this.servicioSeguridad.RecuperarClave(usuario).subscribe((datos:any) => {
      this.servicioSeguridad.AlmacenarClave(datos);
      alert("Alquimotor: Registro Valido, le llegara un su correo electrónico la clave.");
      this.router.navigate(["/inicio"])
    }, (error:any) => {
      //KO
      alert("Alquimotor: Registro invalidos")
    }
    )
  }

}
