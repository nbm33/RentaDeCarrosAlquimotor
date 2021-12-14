import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { ModeloVehiculo } from 'src/app/modelos/vehicolo.modelo';
import { SolicitudService } from 'src/app/servicios/solicitud.service';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-buscar-solicitud',
  templateUrl: './buscar-solicitud.component.html',
  styleUrls: ['./buscar-solicitud.component.css']
})

export class BuscarSolicitudComponent implements OnInit {

  listadoRegistros: ModeloSolicitud[] = [];
  solicitud: any='';
  id='';
  vehiculo: ModeloVehiculo={};
   
  constructor(private solicitudServicio : SolicitudService, private vehiculosService: VehiculosService,private router: Router) {
    
  }

  ngOnInit(): void {
    this.ObtenerListadoSolicitudes();    
  }
  BuscarSolicitud(){
    this.solicitudServicio.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloSolicitud) => {        
    this.solicitud=datos;                           
    })        
  } 

  ObtenerListadoSolicitudes(){
    this.solicitudServicio.ObtenerRegistros().subscribe((datos: ModeloSolicitud[]) => {
      this.listadoRegistros = datos;      
    })
  }

  ObtenerVehiculo(idV: string){
    this.vehiculosService.ObtenerVehiculosId(idV).subscribe((datos: ModeloVehiculo) => {
      this.vehiculo = datos;
    })
    
  }

  Declinar(idS: string){
    this.id = idS;
    this.BuscarSolicitud();  

    let s = new ModeloSolicitud();
    s= this.solicitud;
    s.Estado= ["Declinada"];
       
    this.solicitudServicio.EditarSolicitud(s).subscribe((datos: ModeloSolicitud)=>{
      alert("Solicitud eliminada exitosamente");
      this.router.navigate(["/administracion/buscar-solicitud"]);
    }, (error: any) => {
      alert("Error al eliminar la solicitud");
    });
  }

  Pagar(){
    
  }


}
