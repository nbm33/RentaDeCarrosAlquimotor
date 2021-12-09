import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { SolicitudService } from 'src/app/servicios/solicitud.service';

@Component({
  selector: 'app-editar-solicitud',
  templateUrl: './editar-solicitud.component.html',
  styleUrls: ['./editar-solicitud.component.css']
})
export class EditarSolicitudComponent implements OnInit {
  id:string='';
  fgValidador: FormGroup = this.fb.group({
    'id':['',[Validators.required]],
    'FechaRecogida': ['',[Validators.required]],
    'FechaEntrega': ['',[Validators.required]],
    'Estado': ['',[Validators.required]],
    'FechaSolicitud': ['',[Validators.required]],
    'ValorTotal': ['',[Validators.required]],
    'clienteId': ['',[Validators.required]],
    'puntoAlquilerId': ['',[Validators.required]],
    'vehiculosId': ['',[Validators.required]]
  });
  constructor(private fb: FormBuilder, private servicioSolicitud : SolicitudService, private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.BuscarSolicitud();
  }

  BuscarSolicitud(){
    this.servicioSolicitud.ObtenerRegistrosPorId(this.id).subscribe((datos:ModeloSolicitud) =>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["FechaRecogida"].setValue(datos.FechaRecogida);
      this.fgValidador.controls["FechaEntrega"].setValue(datos.FechaEntrega);
      this.fgValidador.controls["Estado"].setValue(datos.Estado);
      this.fgValidador.controls["FechaSolicitud"].setValue(datos.FechaSolicitud);
      this.fgValidador.controls["ValorTotal"].setValue(datos.ValorTotal);
      this.fgValidador.controls["clienteId"].setValue(datos.clienteId);
      this.fgValidador.controls["puntoAlquilerId"].setValue(datos.puntoAlquilerId);
      this.fgValidador.controls["vehiculosId"].setValue(datos.vehiculosId);
    });
  }

  EditarSolicitud(){
    let fechaRecogida = this.fgValidador.controls["FechaRecogida"].value;
    let fechaEntrega = this.fgValidador.controls["FechaEntrega"].value;
    let estado = "En estudio";
    let fechaSolicitud = '';
    let valorTotal = 0;//parseInt()
    let clienteId = this.fgValidador.controls["clienteId"].value;
    let puntoAlquilerId = this.fgValidador.controls["puntoAlquilerId"].value;
    let vehiculosId = this.fgValidador.controls["vehiculosId"].value;
    
    let s = new ModeloSolicitud();
    s.id=this.id;
    s.FechaRecogida=fechaRecogida;
    s.FechaEntrega=fechaEntrega;
    s.Estado=estado;
    s.FechaSolicitud=fechaSolicitud;
    s.ValorTotal=valorTotal;
    s.clienteId=clienteId;
    s.puntoAlquilerId=puntoAlquilerId;
    s.vehiculosId=vehiculosId;
    
    this.servicioSolicitud.EditarSolicitud(s).subscribe((datos: ModeloSolicitud)=>{
      alert("Solicitud actualizada exitosamente");
      this.router.navigate(["/administracion/buscar-solicitud"]);
    }, (error: any) => {
      alert("Error al actualizar la solicitud");
    });
  }
}
