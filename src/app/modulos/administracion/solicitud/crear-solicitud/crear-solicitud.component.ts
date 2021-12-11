import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloDatos } from 'src/app/modelos/datos.modelo';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { ModeloVehiculo } from 'src/app/modelos/vehicolo.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { SolicitudService } from 'src/app/servicios/solicitud.service';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css'],
  providers: [DatePipe]
})
export class CrearSolicitudComponent implements OnInit {

  idVehiculo = '';
  Vehiculo: any ={};
  cliente: any ='';
  fechaActual : any ='';
  fgValidador: FormGroup = this.fb.group({
    'FechaRecogida': ['',[Validators.required]],
    'FechaEntrega': ['',[Validators.required]]    
  });  
  
  constructor(private fb: FormBuilder, private servicioSolicitud : SolicitudService, private router: Router,
    private vehiculoService: VehiculosService, private route: ActivatedRoute, private sesionService: SeguridadService,
    private datePipe: DatePipe) {   
         
  }

  ngOnInit(): void {    
    this.idVehiculo = this.route.snapshot.params['idVehiculo'];
    this.BuscarVehiculo();
    this.ObtenerDatosCliente();      
    this.fechaActual = this.datePipe.transform(new Date(), 'yyyy-MM-dd')+"T00:00:00Z"; 
  }

  BuscarVehiculo(){
    this.vehiculoService.ObtenerVehiculosId(this.idVehiculo).subscribe((datos: ModeloVehiculo) => {
      this.Vehiculo = datos;
    })
  }

  ObtenerDatosCliente(){
    this.sesionService.ObtenerDatosSesion().subscribe((datosC: ModeloIdentificar) => {
      this.cliente = datosC.datos;
    })
  }

  GuardarSolicitud(){
    let fechaRecogida = this.fgValidador.controls["FechaRecogida"].value+"T00:00:00Z";
    let fechaEntrega = this.fgValidador.controls["FechaEntrega"].value+"T00:00:00Z"; 
    let fechai = new Date(this.fgValidador.controls["FechaRecogida"].value).getTime();
    let fechaf = new Date(this.fgValidador.controls["FechaEntrega"].value).getTime();
    let dias = (fechaf - fechai)/(1000*60*60*24);  
    let valorTotal: any =  dias* this.Vehiculo.ValorDia;
    let clienteId = this.cliente.id;//"61ae4baa457cae525c859618";
    let puntoAlquilerId = this.Vehiculo.puntoAlquilerId;
    let vehiculosId = this.Vehiculo.id;
    
    let s = new ModeloSolicitud();
    s.FechaRecogida=fechaRecogida;
    s.FechaEntrega=fechaEntrega;
    s.Estado= ["En estudio"];
    s.FechaSolicitud = this.fechaActual;
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
