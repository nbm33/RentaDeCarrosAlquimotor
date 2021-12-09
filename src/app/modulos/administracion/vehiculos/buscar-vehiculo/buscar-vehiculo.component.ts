import { Component, OnInit } from '@angular/core';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';
import { ModeloVehiculo } from '../../../../modelos/vehicolo.modelo';

@Component({
  selector: 'app-buscar-vehiculo',
  templateUrl: './buscar-vehiculo.component.html',
  styleUrls: ['./buscar-vehiculo.component.css']
})
export class BuscarVehiculoComponent implements OnInit {

  listadoVehiculos: ModeloVehiculo[] = [];

  constructor(private vehiculosService: VehiculosService) { }

  ngOnInit(): void {
    this.ObtenerListaVehiculos();
  }

  ObtenerListaVehiculos(){
    this.vehiculosService.ObtenerVehiculos().subscribe((datos: ModeloVehiculo[]) => {
      this.listadoVehiculos = datos;
    })

  }

}
