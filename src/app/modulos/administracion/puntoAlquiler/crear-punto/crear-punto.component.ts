import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPuntoAlquiler } from 'src/app/modelos/puntoAlquiler.modelo';
import { PuntoAlquilerService } from 'src/app/servicios/punto-alquiler.service';

@Component({
  selector: 'app-crear-punto',
  templateUrl: './crear-punto.component.html',
  styleUrls: ['./crear-punto.component.css']
})
export class CrearPuntoComponent {
  fbValitador = this.fb.group({
    departamento: ['', [Validators.required]],
    ciudad: ['', [Validators.required]],
    direccion: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private puntoService: PuntoAlquilerService, private router: Router) { }

  onSubmit() {
    console.log(this.fbValitador.value);
    let departamento = this.fbValitador.controls['departamento'].value;
    let ciudad =  this.fbValitador.controls['ciudad'].value;
    let direccion =  this.fbValitador.controls['direccion'].value;
    let p = new ModeloPuntoAlquiler();
    p.Departamento = departamento;
    p.Ciudad = ciudad;
    p.Direccion = direccion;

    this.puntoService.CrearPunto(p).subscribe((datos: ModeloPuntoAlquiler) => {
      alert("Alquimotor: Se registro un Punto de Alquiler");
      this.router.navigate(["/administracion/buscar-punto"])
    }, (error:any) => {
      alert("Alquimotor: Registro invalido")
    }
    )
  }

}
