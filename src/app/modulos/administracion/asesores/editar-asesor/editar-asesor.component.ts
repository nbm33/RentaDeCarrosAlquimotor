import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloAsesor } from 'src/app/modelos/asesor.modelo';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { AsesorService } from 'src/app/servicios/asesor.service';

@Component({
  selector: 'app-editar-asesor',
  templateUrl: './editar-asesor.component.html',
  styleUrls: ['./editar-asesor.component.css']
})
export class EditarAsesorComponent implements OnInit {
  id:string = '';

  fgValitador: FormGroup = this.fb.group({
    id: ['',[Validators.required]],
    nombre: ['',[Validators.required]],
    apellidos: ['',[Validators.required]],
    Celular: ['',[Validators.required]],
    correoElectronico: ['',[Validators.required]],
    

  });

  constructor(private fb : FormBuilder,
    private servicioAsesor: AsesorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarAsesor();
  }

  BuscarAsesor(){
    this.servicioAsesor.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloAsesor) => {
      this.fgValitador.controls["id"].setValue(datos.id);
      this.fgValitador.controls["nombre"].setValue(datos.Nombre);
      this.fgValitador.controls["apellidos"].setValue(datos.Apellido);
      this.fgValitador.controls["Celular"].setValue(datos.Celular);
      this.fgValitador.controls["correoElectronico"].setValue(datos.CorreoElectronico);


    });
  }
  
  EditarAsesor(){
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
    a.id = this.id;
    a.Rol= "asesor"
      

    this.servicioAsesor.ActualizarAsesor(a).subscribe((datos: ModeloUsuario) => {
      alert("Asesor actualizado correctamente");  
      this.router.navigate(["/administracion/listar-asesores"])
      },(error: any) => {
        alert("error actualizando el asesor")
      })
}
}

