import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloSolicitud } from 'src/app/modelos/solicitud.modelo';
import { ModeloTarjetaCredito } from 'src/app/modelos/tarjetacredito.modelo';
import { SolicitudService } from 'src/app/servicios/solicitud.service';
import { TarjetaCreditoService } from 'src/app/servicios/tarjeta-credito.service';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    numero:['',[Validators.required]],
    codigo:['',[Validators.required]],
    nombre:['',[Validators.required]],
    fechaexpiracion:['',[Validators.required]],
    foto:['',[Validators.required]],
    solicitudId:[''],
    

  });

  listadoSolicitudes: ModeloSolicitud[]=[];

  constructor(private fb: FormBuilder,
    private serviciotarjeta: TarjetaCreditoService,
    private solicitudServicio: SolicitudService,
    private router: Router) { }

  ngOnInit(): void {
    this.ObtenerListadoSolicitudes();
  }

  ObtenerListadoSolicitudes(){
    this.solicitudServicio.ObtenerRegistros().subscribe((datos: ModeloSolicitud[]) => {
      this.listadoSolicitudes = datos;      
    })
  }

  GuardarTarjetaCredito(){
    console.log(this.fgValidador.value);
    let numero = this.fgValidador.controls["numero"].value;
    let codigo = this.fgValidador.controls["codigo"].value;
    let nombre = this.fgValidador.controls["nombre"].value;
    let fechaexpiracion = this.fgValidador.controls["fechaexpiracion"].value;
    let foto = this.fgValidador.controls["foto"].value;
    let solicitudId = this.fgValidador.controls['solicitudId'].value;
    let tc = new ModeloTarjetaCredito();
    tc.Numero=numero;
    tc.Codigo=codigo;
    tc.Nombre=nombre;
    tc.FechaExpiracion=fechaexpiracion;
    tc.Foto=foto;
    tc.solicitudId=solicitudId

    this.serviciotarjeta.CrearTarjetaCredito(tc).subscribe((datos:ModeloTarjetaCredito)=>{
      alert("pago realizado con exito")
      this.router.navigate(["/administracion/buscar-solicitud"])
    },(error:any)=>{
      alert("pago realizado")
      this.router.navigate(["/administracion/buscar-solicitud"])
    })

  }

}
