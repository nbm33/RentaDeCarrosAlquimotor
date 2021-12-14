import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloDatos } from 'src/app/modelos/datos.modelo';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { ModeloVehiculo } from 'src/app/modelos/vehicolo.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { SolicitudService } from 'src/app/servicios/solicitud.service';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-editar-solicitud',
  templateUrl: './editar-solicitud.component.html',
  styleUrls: ['./editar-solicitud.component.css'],
  providers: [DatePipe]
})
export class EditarSolicitudComponent implements OnInit {
  
  id='';  
  idV: string = ""  
  Vehiculo: ModeloVehiculo = {};
  cliente: any ='';
  solicitud: ModeloSolicitud = {};

  fgValidador = this.fb.group({
    FechaRecogida: ['',[Validators.required]],
    FechaEntrega: ['',[Validators.required]]    
  });  
  
  constructor(private fb: FormBuilder, private servicioSolicitud : SolicitudService, private router: Router,
    private vehiculoService: VehiculosService, private route: ActivatedRoute, private sesionService: SeguridadService,
    private datePipe: DatePipe) {   
         
  }

  ngOnInit(): void {    
    this.id = this.route.snapshot.params['id'];
    this.ObtenerDatosCliente(); 
  }
  ObtenerDatosCliente(){
  
    this.sesionService.ObtenerDatosSesion().subscribe((datosC: ModeloIdentificar) => {
      this.cliente = datosC.datos;
    })
  }

  BuscarSolicitud(){
    this.servicioSolicitud.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloSolicitud) => {        
    this.solicitud=datos;                           
    })        
  } 

  BuscarVehiculo(){
    this.vehiculoService.ObtenerVehiculosId(this.idV).subscribe((datos: ModeloVehiculo) => {
      this.Vehiculo = datos;
    })
  }

  EditarSolicitud(){  
    console.log(this.solicitud.vehiculosId!);       
    let fechaRecogida = this.fgValidador.controls["FechaRecogida"].value+"T00:00:00Z";
    let fechaEntrega = this.fgValidador.controls["FechaEntrega"].value+"T00:00:00Z";
    let fechai = new Date(this.fgValidador.controls["FechaRecogida"].value).getTime();
    let fechaf = new Date(this.fgValidador.controls["FechaEntrega"].value).getTime();
    let dias = (fechaf - fechai)/(1000*60*60*24);    
    let valorTotal: any =  dias * this.Vehiculo.ValorDia!;
    let clienteId = this.cliente.id;
    let puntoAlquilerId = this.solicitud.puntoAlquilerId;
    let vehiculosId = this.solicitud.vehiculosId;
    let vehiculosTipo = this.solicitud.vehiculosTipo;   
    
    let s = new ModeloSolicitud();
    s.id=this.id;
    s.FechaRecogida=fechaRecogida;
    s.FechaEntrega=fechaEntrega;
    s.Estado= this.solicitud.Estado;
    s.FechaSolicitud=this.solicitud.FechaSolicitud;
    s.ValorTotal=valorTotal;
    s.clienteId=clienteId;
    s.puntoAlquilerId=puntoAlquilerId;
    s.vehiculosId=vehiculosId;
    s.vehiculosTipo=vehiculosTipo;     

    this.servicioSolicitud.EditarSolicitud(s).subscribe((datos: ModeloSolicitud)=>{
      alert("Solicitud modificada exitosamente");
      this.router.navigate(["/administracion/buscar-solicitud"]);
    }, (error: any) => {
      alert("Error al modificar la solicitud");
    });
  }
}