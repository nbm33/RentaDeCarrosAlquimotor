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

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css'],
  providers: [DatePipe]
})
export class CrearSolicitudComponent implements OnInit {

  idVehiculo = '';
  Vehiculo: ModeloVehiculo = {};
  cliente: ModeloDatos ={};
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
     // this.fechaActual = this.datePipe.transform(new Date(), 'yyyy-MM-dd'); 
  }

  BuscarVehiculo(){
    this.vehiculoService.ObtenerVehiculosId(this.idVehiculo).subscribe((datos: ModeloVehiculo) => {
      this.Vehiculo = datos;
    })
  }

  ObtenerDatosCliente(){
    this.sesionService.ObtenerInformacionSesion().subscribe((datosC: ModeloDatos) => {
      this.cliente = datosC;
    })
  }

  GuardarSolicitud(){
    let fechaRecogida = this.fgValidador.controls["FechaRecogida"].value+"T00:00:00Z";
    let fechaEntrega = this.fgValidador.controls["FechaEntrega"].value+"T00:00:00Z";    
    let valorTotal = 1;//parseInt()
    let clienteId = this.cliente.id;//"61ae4baa457cae525c859618";
    let puntoAlquilerId = this.Vehiculo.puntoAlquilerId;
    let vehiculosId = this.Vehiculo.id;
    
    let s = new ModeloSolicitud();
    s.FechaRecogida=fechaRecogida;
    s.FechaEntrega=fechaEntrega;
    s.Estado= ["En estudio"];
    s.FechaSolicitud="2021-12-10"+"T00:00:00Z";
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
