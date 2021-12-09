import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehicolo.modelo';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-ver-vehiculo',
  templateUrl: './ver-vehiculo.component.html',
  styleUrls: ['./ver-vehiculo.component.css']
})
export class VerVehiculoComponent implements OnInit {
  
  id: string= "";
  Vehiculo: ModeloVehiculo = {};

  constructor(private vehiculoService: VehiculosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarVehiculo();
  }

  BuscarVehiculo(){
    this.vehiculoService.ObtenerVehiculosId(this.id).subscribe((datos: ModeloVehiculo) => {
      this.Vehiculo = datos;
    })
  }

  Alquilar(){
 
  }

}
