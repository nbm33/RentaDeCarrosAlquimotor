import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { SolicitudService } from 'src/app/servicios/solicitud.service';

@Component({
  selector: 'app-eliminar-solicitud',
  templateUrl: './eliminar-solicitud.component.html',
  styleUrls: ['./eliminar-solicitud.component.css']
})
export class EliminarSolicitudComponent implements OnInit {

  id='';
  solicitud:any='';
  constructor(private servicioSolicitud: SolicitudService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];    
    this.BuscarSolicitud();
  }

  BuscarSolicitud(){
    this.servicioSolicitud.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloSolicitud) => {        
    this.solicitud=datos;                           
    })        
  } 

  Eliminar(){
    this.servicioSolicitud.EliminarSolicitud(this.id).subscribe((datos: ModeloSolicitud) => {
      alert("Solicitud eliminada correctamente");
      this.router.navigate(["/administracion/asesor-solicitud"])
    }, (error:any) => {
      alert("Error al eliminar la solicitud")
    }
    )
  }
}
