import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent {
  fbValitador = this.fb.group({
    imagen: ['', [Validators.required]],
    tipo: ['', [Validators.required]],
    marca: ['', [Validators.required]],
    modelo: ['', [Validators.required]],
    des: ['', [Validators.required]],
    valor: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private servicioSeguridad: SeguridadService, private router: Router) { }

  onSubmit() {
    console.log(this.fbValitador.value);
    let imagen = this.fbValitador.controls['imagen'].value;
    let tipo =  this.fbValitador.controls['tipo'].value;
    let marca =  this.fbValitador.controls['marca'].value;
    let modelo =  this.fbValitador.controls['modelo'].value;
    let des =  this.fbValitador.controls['des'].value;
    let valor =  this.fbValitador.controls['valor'].value;
    alert("Administrador: Su registro de vehiculo fue aprobado")
    // this.servicioSeguridad.Registrar(nombre,apellido,correo,celular,rol).subscribe((datos:any) => {
    //   this.servicioSeguridad.AlmacenarUsuario(datos);
    //   alert("Alquimotor: Registro Valido, le llegara un su correo electrónico la clave. Por revise, y vualva a esta plataforma y podra ingresar usando el boton de Inisio Sesion");
    //   this.router.navigate(["/inicio"])
    // }, (error:any) => {
    //   //KO
    //   alert("Alquimotor: Registro invalidos")
    // }
    // )
  }

}
