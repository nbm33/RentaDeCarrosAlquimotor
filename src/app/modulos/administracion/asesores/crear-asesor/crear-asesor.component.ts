import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloAsesor } from 'src/app/modelos/asesor.modelo';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
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
    Celular: ['',[Validators.required]],
    correoElectronico: ['',[Validators.required]],
    

  });

  constructor(private fb : FormBuilder,
    private servicioAsesor: AsesorService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  GuardarAsesor(){
    console.log(this.fgValitador.value);
    let nombre = this.fgValitador.controls["nombre"].value;
    let apellidos = this.fgValitador.controls["apellidos"].value;
    let Celular = this.fgValitador.controls["Celular"].value;
    let correoElectronico = this.fgValitador.controls["correoElectronico"].value;
    let a = new ModeloUsuario();
    a.Nombre = nombre;
    a.Apellido = apellidos;
    a.Cedula =Celular;
    a.CorreoElectronico = correoElectronico;
    a.Rol= "asesor"
      

    this.servicioAsesor.CrearAsesor(a).subscribe((datos: ModeloUsuario) => {
      alert("Asesor creado correctamente");  
      this.router.navigate(["/administracion/listar-asesores"])
      },(error: any) => {
        alert("error creando el asesor")
      })
}
}
