import { Component, OnInit } from '@angular/core';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { SolicitudService } from 'src/app/servicios/solicitud.service';

@Component({
  selector: 'app-buscar-solicitud',
  templateUrl: './buscar-solicitud.component.html',
  styleUrls: ['./buscar-solicitud.component.css']
})
export class BuscarSolicitudComponent implements OnInit {

  listadoRegistros: ModeloSolicitud[] = [];

  constructor(private solicitudServicio : SolicitudService) {
    
   }

  ngOnInit(): void {
    this.ObtenerListadoSolicitudes();
  }

  ObtenerListadoSolicitudes(){
    this.solicitudServicio.ObtenerRegistros().subscribe((datos: ModeloSolicitud[]) => {
      this.listadoRegistros = datos;
      //alert("Solicitud creada exitosamente"+ this.listadoRegistros[0].id);
    })
  }
}
