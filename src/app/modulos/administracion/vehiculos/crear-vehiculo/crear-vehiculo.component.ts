import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPuntoAlquiler } from 'src/app/modelos/puntoAlquiler.modelo';
import { ModeloVehiculo } from 'src/app/modelos/vehicolo.modelo';
import { PuntoAlquilerService } from 'src/app/servicios/punto-alquiler.service';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {
  
  fbValitador = this.fb.group({
    imagen: ['', [Validators.required]],
    tipo: ['', [Validators.required]],
    marca: ['', [Validators.required]],
    modelo: ['', [Validators.required]],
    des: ['', [Validators.required]],
    valor: ['', [Validators.required]],
    punto: [''],
  });

  listadoPuntos: ModeloPuntoAlquiler[] = [];

  constructor(private fb: FormBuilder, private vehiculoService: VehiculosService, private puntoService: PuntoAlquilerService, private router: Router) { }

  ngOnInit(): void {
    this.ObtenerListaPuntos();
  }

  ObtenerListaPuntos(){
    this.puntoService.ObtenerPuntos().subscribe((datos: ModeloPuntoAlquiler[]) => {
      this.listadoPuntos = datos;
    })
  }

  onSubmit() {
    console.log(this.fbValitador.value);
    let imagen = this.fbValitador.controls['imagen'].value;
    let tipo =  this.fbValitador.controls['tipo'].value;
    let marca =  this.fbValitador.controls['marca'].value;
    let modelo =  parseInt(this.fbValitador.controls['modelo'].value);
    let des =  this.fbValitador.controls['des'].value;
    let valor =  parseInt(this.fbValitador.controls['valor'].value);
    let punto =  this.fbValitador.controls['punto'].value;
    let v = new ModeloVehiculo();
    v.imagen = imagen;
    v.Tipo = tipo;
    v.Marca = marca;
    v.Modelo = modelo;
    v.Descripcion = des;
    v.ValorDia = valor;
    v.Disponibilidad = true;
    v.administradorId = "";
    v.asesoresId = "";
    v.puntoAlquilerId = punto;

    this.vehiculoService.CrearVehiculos(v).subscribe((datos: ModeloVehiculo) => {
      alert("Alquimotor: Registro de vehiculo valido");
      this.router.navigate(["/administracion/buscar-vehiculo"])
    }, (error:any) => {
      alert("Alquimotor: Registro invalido")
    }
    )
  }

}
