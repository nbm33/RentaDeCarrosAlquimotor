import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehicolo.modelo';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-asesor-vehiculo',
  templateUrl: './asesor-vehiculo.component.html',
  styleUrls: ['./asesor-vehiculo.component.css']
})
export class AsesorVehiculoComponent implements OnInit {

  vehiculo: any = "";
  listadoVehiculos: ModeloVehiculo[] = [];
  id:string = ""

  constructor(private vehiculosService: VehiculosService, private router: Router) { }

  ngOnInit(): void {
    this.ObtenerListaVehiculos();
  }

  ObtenerListaVehiculos(){
    this.vehiculosService.ObtenerVehiculos().subscribe((datos: ModeloVehiculo[]) => {
      this.listadoVehiculos = datos;
    })
  }

  BuscarVehiculo(){
    this.vehiculosService.ObtenerVehiculosId(this.id).subscribe((datos: ModeloVehiculo) => {
      this.vehiculo = datos;
    })
  }

  refresh(): void {
    window.location.reload();
  }

  CambiarHabilitado(idV: string){
    this.id = idV;
    this.BuscarVehiculo();

    let v = new ModeloVehiculo();
    v = this.vehiculo
    v.Disponibilidad = true;

    this.vehiculosService.ActualizarVehiculos(v).subscribe((datos: ModeloVehiculo) => {
      alert("Alquimotor: Vehiculo actualizado correctamente");
      this.refresh()
    }, (error:any) => {
      alert("Alquimotor: Actualización invalida")
    }
    )
  }

  CambiarDesabilitado(idV: string){
    this.id = idV;
    this.BuscarVehiculo();

    let v = new ModeloVehiculo();
    v = this.vehiculo
    v.Disponibilidad = false;

    this.vehiculosService.ActualizarVehiculos(v).subscribe((datos: ModeloVehiculo) => {
      alert("Alquimotor: Vehiculo actualizado correctamente");
      this.refresh()
    }, (error:any) => {
      alert("Alquimotor: Actualización invalida")
    }
    )
  }
}
