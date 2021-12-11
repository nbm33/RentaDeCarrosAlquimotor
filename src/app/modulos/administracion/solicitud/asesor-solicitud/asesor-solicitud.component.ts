import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { SolicitudService } from 'src/app/servicios/solicitud.service';

@Component({
  selector: 'app-asesor-solicitud',
  templateUrl: './asesor-solicitud.component.html',
  styleUrls: ['./asesor-solicitud.component.css']
})
export class AsesorSolicitudComponent implements OnInit {

  listadoRegistros: ModeloSolicitud[] = [];
  id='';
  solicitud: any='';
  constructor(private solicitudServicio : SolicitudService, private router: Router) {
    
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

  Aceptar(idS: string){
    this.id = idS;
    this.BuscarSolicitud();  

    let s = new ModeloSolicitud();
    s= this.solicitud;
    s.Estado= ["Aceptada"];   
    
    this.solicitudServicio.EditarSolicitud(s).subscribe((datos: ModeloSolicitud)=>{
      alert("Solicitud modificada exitosamente");
      this.router.navigate(["/administracion/asesor-solicitud"]);
    }, (error: any) => {
      alert("Error al modificar la solicitud");
    });
  }

  Rechazar(idS: string){
    this.id = idS;
    this.BuscarSolicitud();  

    let s = new ModeloSolicitud();
    s= this.solicitud;    
    s.Estado= ["Rechazada"];    
    
    this.solicitudServicio.EditarSolicitud(s).subscribe((datos: ModeloSolicitud)=>{
      alert("Solicitud modificada exitosamente");
      this.router.navigate(["/administracion/asesor-solicitud"]);
    }, (error: any) => {
      alert("Error al modificar la solicitud");
    });
  }
}
