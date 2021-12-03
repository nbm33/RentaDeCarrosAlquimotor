import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {
  fbValitador = this.fb.group({
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    correo: ['', [Validators.required]],
    celular: ['', [Validators.required]],
    rol: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private servicioSeguridad: SeguridadService, private router: Router) { }

  onSubmit() {
    console.log(this.fbValitador.value);
    let nombre = this.fbValitador.controls['nombre'].value;
    let apellido =  this.fbValitador.controls['apellido'].value;
    let correo =  this.fbValitador.controls['correo'].value;
    let celular =  this.fbValitador.controls['celular'].value;
    let rol =  this.fbValitador.controls['rol'].value;
    this.servicioSeguridad.Registrar(nombre,apellido,correo,celular,rol).subscribe((datos:any) => {
      this.servicioSeguridad.AlmacenarUsuario(datos);
      alert("Alquimotor: Registro Valido, le llegara un su correo electrónico la clave. Por revise, y vualva a esta plataforma y podra ingresar usando el boton de Inisio Sesion");
      this.router.navigate(["/inicio"])
    }, (error:any) => {
      //KO
      alert("Alquimotor: Registro invalidos")
    }
    )
  }

}
