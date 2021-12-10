import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPuntoAlquiler } from 'src/app/modelos/puntoAlquiler.modelo';
import { PuntoAlquilerService } from 'src/app/servicios/punto-alquiler.service';

@Component({
  selector: 'app-eliminar-punto',
  templateUrl: './eliminar-punto.component.html',
  styleUrls: ['./eliminar-punto.component.css']
})
export class EliminarPuntoComponent implements OnInit {

  id: string= "";
  Punto: ModeloPuntoAlquiler = {};

  constructor(private puntoService: PuntoAlquilerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarPunto();
  }

  BuscarPunto(){
    this.puntoService.ObtenerPuntoId(this.id).subscribe((datos: ModeloPuntoAlquiler) => {
      this.Punto = datos;
    })
  }

  Eliminar(){
    this.puntoService.EliminarPunto(this.id).subscribe((datos: ModeloPuntoAlquiler) => {
      alert("Alquimotor: Punto eliminado correctamente");
      this.router.navigate(["/administracion/buscar-punto"])
    }, (error:any) => {
      alert("Alquimotor: No se puede eliminar")
    }
    )
  }
}
