import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloDatos } from 'src/app/modelos/datos.modelo';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { ModeloVehiculo } from 'src/app/modelos/vehicolo.modelo';
import { SolicitudService } from 'src/app/servicios/solicitud.service';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-editar-solicitud',
  templateUrl: './editar-solicitud.component.html',
  styleUrls: ['./editar-solicitud.component.css']
})
export class EditarSolicitudComponent implements OnInit {
  
  id='';
  
  fgValidador: FormGroup = this.fb.group({
    'FechaRecogida': ['',[Validators.required]],
    'FechaEntrega': ['',[Validators.required]],
    'id' : ['',[Validators.required]],
    'Estado' : ['',[Validators.required]],
    'puntoAlquilerId' : ['',[Validators.required]],
    'vehiculosId' : ['',[Validators.required]]
  });  
  
  constructor(private fb: FormBuilder, private servicioSolicitud : SolicitudService, private router: Router,
    private vehiculoService: VehiculosService, private route: ActivatedRoute) {   
         
  }

  ngOnInit(): void {    
    this.id = this.route.snapshot.params['id'];
    this.BuscarSolicitud();    
  }

  BuscarSolicitud(){
    this.servicioSolicitud.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloSolicitud) => {    
    this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["FechaRecogida"].setValue("");
      this.fgValidador.controls["FechaEntrega"].setValue("");
      this.fgValidador.controls["Estado"].setValue(datos.Estado);     
      this.fgValidador.controls["vehiculosId"].setValue(datos.vehiculosId);  
      this.fgValidador.controls["puntoAlquilerId"].setValue(datos.puntoAlquilerId);
      this.fgValidador.controls["FechaSolicitud"].setValue(datos.FechaSolicitud);     
      this.fgValidador.controls["ValorTotal"].setValue(datos.ValorTotal);  
      this.fgValidador.controls["clienteId"].setValue(datos.clienteId);         
    })
  } 

  GuardarSolicitud(){
    let id = this.fgValidador.controls["id"].value;
    let fechaRecogida = this.fgValidador.controls["FechaRecogida"].value+"T00:00:00Z";
    let fechaEntrega = this.fgValidador.controls["FechaEntrega"].value+"T00:00:00Z"; 
    let estado = this.fgValidador.controls["Estado"].value;   
    let fechaSolicitud = this.fgValidador.controls["FechaSolicitud"].value;
    let valorTotal = 2;//parseInt(this.fgValidador.controls["ValorTotal"].value);
    let clienteId = this.fgValidador.controls["clienteId"].value;
    let puntoAlquilerId = this.fgValidador.controls["puntoAlquilerId"].value;
    let vehiculosId = this.fgValidador.controls["vehiculosId"].value;
    
    let s = new ModeloSolicitud();
    s.id=id;
    s.FechaRecogida=fechaRecogida;
    s.FechaEntrega=fechaEntrega;
    s.Estado= estado;
    s.FechaSolicitud=fechaSolicitud;
    s.ValorTotal=valorTotal;
    s.clienteId=clienteId;
    s.puntoAlquilerId=puntoAlquilerId;
    s.vehiculosId=vehiculosId;    
    
    this.servicioSolicitud.EditarSolicitud(s).subscribe((datos: ModeloSolicitud)=>{
      alert("Solicitud modificada exitosamente");
      this.router.navigate(["/administracion/buscar-solicitud"]);
    }, (error: any) => {
      alert("Error al modificar la solicitud");
    });
  }
}