import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministracionRoutingModule } from './administracion-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { BuscarUsuarioComponent } from './usuario/buscar-usuario/buscar-usuario.component';
import { CrearVehiculoComponent } from './vehiculos/crear-vehiculo/crear-vehiculo.component';
import { BuscarVehiculoComponent } from './vehiculos/buscar-vehiculo/buscar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculos/eliminar-vehiculo/eliminar-vehiculo.component';
import { EditarVehiculoComponent } from './vehiculos/editar-vehiculo/editar-vehiculo.component';
import { VerVehiculoComponent } from './vehiculos/ver-vehiculo/ver-vehiculo.component';
import { CrearPuntoComponent } from './puntoAlquiler/crear-punto/crear-punto.component';
import { EditarPuntoComponent } from './puntoAlquiler/editar-punto/editar-punto.component';
import { EliminarPuntoComponent } from './puntoAlquiler/eliminar-punto/eliminar-punto.component';
import { BuscarPuntoComponent } from './puntoAlquiler/buscar-punto/buscar-punto.component';
import { ClienteVehiculoComponent } from './vehiculos/cliente-vehiculo/cliente-vehiculo.component';
import { CrearSolicitudComponent } from './solicitud/crear-solicitud/crear-solicitud.component';
import { BuscarSolicitudComponent } from './solicitud/buscar-solicitud/buscar-solicitud.component';
import { EditarSolicitudComponent } from './solicitud/editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './solicitud/eliminar-solicitud/eliminar-solicitud.component';
import { AsesorSolicitudComponent } from './solicitud/asesor-solicitud/asesor-solicitud.component';
import { CrearAsesorComponent } from './asesores/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './asesores/editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from './asesores/eliminar-asesor/eliminar-asesor.component';
import { BuscarAsesorComponent } from './asesores/buscar-asesor/buscar-asesor.component';
import { CrearTarjetaComponent } from './tajertacredito/crear-tarjeta/crear-tarjeta.component';
import { EliminarTarjetaComponent } from './tajertacredito/eliminar-tarjeta/eliminar-tarjeta.component';
import { PagoSolicitudComponent } from './tajertacredito/pago-solicitud/pago-solicitud.component';
import { AsesorVehiculoComponent } from './vehiculos/asesor-vehiculo/asesor-vehiculo.component';



@NgModule({
  declarations: [
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    BuscarUsuarioComponent,
    CrearVehiculoComponent,
    BuscarVehiculoComponent,
    EliminarVehiculoComponent,
    EditarVehiculoComponent,
    ClienteVehiculoComponent,
    VerVehiculoComponent,
    CrearPuntoComponent,
    EditarPuntoComponent,
    EliminarPuntoComponent,
    BuscarPuntoComponent,  
    CrearSolicitudComponent,
    BuscarSolicitudComponent,
    EditarSolicitudComponent,
    EliminarSolicitudComponent,
    AsesorSolicitudComponent,
    CrearAsesorComponent,
    EditarAsesorComponent,
    EliminarAsesorComponent,
    BuscarAsesorComponent,
    CrearTarjetaComponent,
    EliminarTarjetaComponent,
    PagoSolicitudComponent,
    AsesorVehiculoComponent,
    AsesorSolicitudComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdministracionModule { }
