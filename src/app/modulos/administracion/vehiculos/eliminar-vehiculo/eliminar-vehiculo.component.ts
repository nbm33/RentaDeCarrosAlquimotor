import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehicolo.modelo';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-eliminar-vehiculo',
  templateUrl: './eliminar-vehiculo.component.html',
  styleUrls: ['./eliminar-vehiculo.component.css']
})
export class EliminarVehiculoComponent implements OnInit {

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

  Eliminar(){
    this.vehiculoService.EliminarVehiculos(this.id).subscribe((datos: ModeloVehiculo) => {
      alert("Alquimotor: Vehiculo eliminado correctamente");
      this.router.navigate(["/administracion/buscar-vehiculo"])
    }, (error:any) => {
      alert("Alquimotor: No se puede eliminar")
    }
    )
  }
}
