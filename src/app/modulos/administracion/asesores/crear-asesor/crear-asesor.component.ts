import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloAsesor } from 'src/app/modelos/asesor.modelo';
import { AsesorService } from 'src/app/servicios/asesor.service';

@Component({
  selector: 'app-crear-asesor',
  templateUrl: './crear-asesor.component.html',
  styleUrls: ['./crear-asesor.component.css']
})
export class CrearAsesorComponent implements OnInit {
    fgValitador: FormGroup = this.fb.group({
    nombre: ['',[Validators.required]],
    apellidos: ['',[Validators.required]],
    Ceular: ['',[Validators.required]],
    correoElectronico: ['',[Validators.required]],
    

  });

  constructor(private fb : FormBuilder,
    private servicioAsesor: AsesorService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
GuardarAsesor(){
  console.log("llamando metodo");
      let nombre = this.fgValitador.controls["nombre"].value;
      console.log(nombre);
      let apellidos = this.fgValitador.controls["apellido"].value;
      let celular = this.fgValitador.controls["celular"].value;
      let correoElectronico = this.fgValitador.controls["correo"].value;
      let a = new ModeloAsesor();
      a.Nombre = nombre;
      a.Apellido = apellidos;
      a.Celular =celular;
      a.CorreoElectronico = correoElectronico;
     

    this.servicioAsesor.CrearAsesor(a).subscribe((datos: ModeloAsesor) => {
      alert("Asesor creado correctamente");  
this.router.navigate(["/administracion/listar-asesores"]);
    },(error: any) => {
      alert("error creando el asesor")
    })
}
}
