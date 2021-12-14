import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { ModeloVehiculo } from 'src/app/modelos/vehicolo.modelo';
import { SolicitudService } from 'src/app/servicios/solicitud.service';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-asesor-solicitud',
  templateUrl: './asesor-solicitud.component.html',
  styleUrls: ['./asesor-solicitud.component.css']
})
export class AsesorSolicitudComponent implements OnInit {
  
  listadoRegistros: ModeloSolicitud[] = [];
  solicitud: any='';
  id='';
  vehiculo: ModeloVehiculo={};

  constructor(private solicitudServicio : SolicitudService, private vehiculosService: VehiculosService,private router: Router) {
    
   }

  ngOnInit(): void {
    this.ObtenerListadoSolicitudes();
  }

  refresh(): void {
    window.location.reload();
  }

  BuscarSolicitud(){
    this.solicitudServicio.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloSolicitud) => {        
    this.solicitud=datos;                           
    })        
  } 

  ObtenerListadoSolicitudes(){
    this.solicitudServicio.ObtenerRegistros().subscribe((datos: ModeloSolicitud[]) => {
      this.listadoRegistros = datos;
      //alert("Solicitud creada exitosamente"+ this.listadoRegistros[0].id);
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

  AceptarSolicitud(idS: string){
    this.id = idS;
    this.BuscarSolicitud();  

    let s = new ModeloSolicitud();
    s= this.solicitud;
    s.Estado = ["Aceptada"];

    this.solicitudServicio.EditarSolicitud(s).subscribe((datos: ModeloSolicitud)=>{
      alert("Solicitud eliminada exitosamente");
      this.refresh()
    }, (error: any) => {
      alert("Error al eliminar la solicitud");
    });
  }

  RechazarSolicitud(idS: string){
    this.id = idS;
    this.BuscarSolicitud();

    let s = new ModeloSolicitud();
    s= this.solicitud;
    s.Estado = ["Declinada"];

    this.solicitudServicio.EditarSolicitud(s).subscribe((datos: ModeloSolicitud)=>{
      alert("Solicitud eliminada exitosamente");
      this.refresh()
    }, (error: any) => {
      alert("Error al eliminar la solicitud");
    });
  }

}
