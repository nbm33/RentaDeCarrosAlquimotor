import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloAsesor } from 'src/app/modelos/asesor.modelo';
import { AsesorService } from 'src/app/servicios/asesor.service';

@Component({
  selector: 'app-eliminar-asesor',
  templateUrl: './eliminar-asesor.component.html',
  styleUrls: ['./eliminar-asesor.component.css']
})
export class EliminarAsesorComponent implements OnInit {

  id: string= "";
  Asesor: ModeloAsesor = {};
  

  constructor(private asesorService: AsesorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarAsesor();
  }

  BuscarAsesor(){
    this.asesorService.ObtenerAsesoresPorId(this.id).subscribe((datos: ModeloAsesor) => {
      this.Asesor = datos;
    })
  }

  Eliminar(){
    this.asesorService.EliminarAsesor(this.id).subscribe((datos: ModeloAsesor) => {
      alert("Alquimotor: Asesor eliminado correctamente");
      this.router.navigate(["/administracion/buscar-asesor"])
    }, (error:any) => {
      alert("Alquimotor: No se puede eliminar asesor")
    }
    )
  }
}