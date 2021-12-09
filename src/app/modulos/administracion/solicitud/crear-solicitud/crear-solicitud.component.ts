import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { SolicitudService } from 'src/app/servicios/solicitud.service';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'FechaRecogida': ['',[Validators.required]],
    'FechaEntrega': ['',[Validators.required]],
    'Estado': ['',[Validators.required]],
    'FechaSolicitud': ['',[Validators.required]],
    'ValorTotal': ['',[Validators.required]],
    'clienteId': ['',[Validators.required]],
    'puntoAlquilerId': ['',[Validators.required]],
    'vehiculosId': ['',[Validators.required]]
  });
  constructor(private fb: FormBuilder, private servicioSolicitud : SolicitudService, private router: Router) { }

  ngOnInit(): void {
  }

  GuardarSolicitud(){
    let fechaRecogida = this.fgValidador.controls["FechaRecogida"].value;
    let fechaEntrega = this.fgValidador.controls["FechaEntrega"].value;
    let estado = "En estudio";
    let fechaSolicitud = '';
    let valorTotal = 0;//parseInt()
    let clienteId = this.fgValidador.controls["clienteId"].value;
    let puntoAlquilerId = this.fgValidador.controls["puntoAlquilerId"].value;
    let vehiculosId = this.fgValidador.controls["vehiculosId"].value;
    
    let s = new ModeloSolicitud();
    s.FechaRecogida=fechaRecogida;
    s.FechaEntrega=fechaEntrega;
    s.Estado=estado;
    s.FechaSolicitud=fechaSolicitud;
    s.ValorTotal=valorTotal;
    s.clienteId=clienteId;
    s.puntoAlquilerId=puntoAlquilerId;
    s.vehiculosId=vehiculosId;
    
    this.servicioSolicitud.CrearSolicitud(s).subscribe((datos: ModeloSolicitud)=>{
      alert("Solicitud creada exitosamente");
      this.router.navigate(["/administracion/buscar-solicitud"]);
    }, (error: any) => {
      alert("Error al crear la solicitud");
    });
  }
}
