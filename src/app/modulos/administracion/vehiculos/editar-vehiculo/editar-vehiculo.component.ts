import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPuntoAlquiler } from 'src/app/modelos/puntoAlquiler.modelo';
import { ModeloVehiculo } from 'src/app/modelos/vehicolo.modelo';
import { PuntoAlquilerService } from 'src/app/servicios/punto-alquiler.service';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';

@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent implements OnInit{

  id: string= "";
  listadoPuntos: ModeloPuntoAlquiler[] = [];

  fbValitador = this.fb.group({
    id: ['', [Validators.required]],
    imagen: ['', [Validators.required]],
    tipo: ['', [Validators.required]],
    marca: ['', [Validators.required]],
    modelo: ['', [Validators.required]],
    des: ['', [Validators.required]],
    valor: ['', [Validators.required]],
    punto: [''],
  });

  constructor(private fb: FormBuilder, private vehiculoService: VehiculosService, private puntoService: PuntoAlquilerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ObtenerListaPuntos();
    this.BuscarVehiculo();
  }

  ObtenerListaPuntos(){
    this.puntoService.ObtenerPuntos().subscribe((datos: ModeloPuntoAlquiler[]) => {
      this.listadoPuntos = datos;
    })
  }

  BuscarVehiculo(){
    this.vehiculoService.ObtenerVehiculosId(this.id).subscribe((datos: ModeloVehiculo) => {
      this.fbValitador.controls["id"].setValue(this.id);
      this.fbValitador.controls["imagen"].setValue(datos.imagen);
      this.fbValitador.controls["tipo"].setValue(datos.Tipo);
      this.fbValitador.controls["marca"].setValue(datos.Marca);
      this.fbValitador.controls["modelo"].setValue(datos.Modelo);
      this.fbValitador.controls["des"].setValue(datos.Descripcion);
      this.fbValitador.controls["valor"].setValue(datos.ValorDia);
      this.fbValitador.controls["punto"].setValue(datos.puntoAlquilerId);
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
    v.id = this.id;
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

    this.vehiculoService.ActualizarVehiculos(v).subscribe((datos: ModeloVehiculo) => {
      alert("Alquimotor: Vehiculo actualizado correctamente");
      this.router.navigate(["/administracion/buscar-vehiculo"])
    }, (error:any) => {
      alert("Alquimotor: Actualización invalida")
    }
    )
  }

}
