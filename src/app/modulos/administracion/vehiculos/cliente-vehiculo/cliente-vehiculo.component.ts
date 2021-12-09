import { Component, OnInit } from '@angular/core';
import { ModeloVehiculo } from 'src/app/modelos/vehicolo.modelo';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-cliente-vehiculo',
  templateUrl: './cliente-vehiculo.component.html',
  styleUrls: ['./cliente-vehiculo.component.css']
})
export class ClienteVehiculoComponent implements OnInit {

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
