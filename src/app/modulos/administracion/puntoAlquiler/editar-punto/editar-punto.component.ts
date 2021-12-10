import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPuntoAlquiler } from 'src/app/modelos/puntoAlquiler.modelo';
import { PuntoAlquilerService } from 'src/app/servicios/punto-alquiler.service';

@Component({
  selector: 'app-editar-punto',
  templateUrl: './editar-punto.component.html',
  styleUrls: ['./editar-punto.component.css']
})
export class EditarPuntoComponent implements OnInit {

  id: string= "";

  fbValitador = this.fb.group({
    id: ['', [Validators.required]],
    departamento: ['', [Validators.required]],
    ciudad: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private puntoService: PuntoAlquilerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarPunto();
  }

  BuscarPunto(){
    this.puntoService.ObtenerPuntoId(this.id).subscribe((datos: ModeloPuntoAlquiler) => {
      this.fbValitador.controls["id"].setValue(this.id);
      this.fbValitador.controls["departamento"].setValue(datos.Departamento);
      this.fbValitador.controls["ciudad"].setValue(datos.Ciudad);
      this.fbValitador.controls["direccion"].setValue(datos.Direccion);
    })
  }

  onSubmit() {
    console.log(this.fbValitador.value);
    let departamento = this.fbValitador.controls['departamento'].value;
    let ciudad =  this.fbValitador.controls['ciudad'].value;
    let direccion =  this.fbValitador.controls['direccion'].value;
    let p = new ModeloPuntoAlquiler();
    p.id = this.id;
    p.Departamento = departamento;
    p.Ciudad = ciudad;
    p.Direccion = direccion;

    this.puntoService.ActualizarPunto(p).subscribe((datos: ModeloPuntoAlquiler) => {
      alert("Alquimotor: Punto actualizado correctamente");
      this.router.navigate(["/administracion/buscar-punto"])
    }, (error:any) => {
      alert("Alquimotor: Actualización invalida")
    }
    )
  }

}
