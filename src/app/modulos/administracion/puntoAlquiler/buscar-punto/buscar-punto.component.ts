import { Component, OnInit } from '@angular/core';
import { ModeloPuntoAlquiler } from 'src/app/modelos/puntoAlquiler.modelo';
import { PuntoAlquilerService } from 'src/app/servicios/punto-alquiler.service';

@Component({
  selector: 'app-buscar-punto',
  templateUrl: './buscar-punto.component.html',
  styleUrls: ['./buscar-punto.component.css']
})
export class BuscarPuntoComponent implements OnInit {

  listadoPuntos: ModeloPuntoAlquiler[] = [];

  constructor(private puntoService: PuntoAlquilerService) { }

  ngOnInit(): void {
    this.ObtenerListaPuntos();
  }

  ObtenerListaPuntos(){
    this.puntoService.ObtenerPuntos().subscribe((datos: ModeloPuntoAlquiler[]) => {
      this.listadoPuntos = datos;
    })

  }

}
