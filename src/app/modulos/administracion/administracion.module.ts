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
import { CrearSolicitudComponent } from './solicitud/crear-solicitud/crear-solicitud.component';
import { BuscarSolicitudComponent } from './solicitud/buscar-solicitud/buscar-solicitud.component';
import { EditarSolicitudComponent } from './solicitud/editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './solicitud/eliminar-solicitud/eliminar-solicitud.component';
import { VerVehiculoComponent } from './vehiculos/ver-vehiculo/ver-vehiculo.component';
import { ClienteVehiculoComponent } from './vehiculos/cliente-vehiculo/cliente-vehiculo.component';
import { CrearPuntoComponent } from './puntoAlquiler/crear-punto/crear-punto.component';
import { EditarPuntoComponent } from './puntoAlquiler/editar-punto/editar-punto.component';
import { EliminarPuntoComponent } from './puntoAlquiler/eliminar-punto/eliminar-punto.component';
import { BuscarPuntoComponent } from './puntoAlquiler/buscar-punto/buscar-punto.component';
import { AsesorVehiculoComponent } from './vehiculos/asesor-vehiculo/asesor-vehiculo.component';
import { AsesorSolicitudComponent } from './solicitud/asesor-solicitud/asesor-solicitud.component';



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
    CrearSolicitudComponent,
    BuscarSolicitudComponent,
    EditarSolicitudComponent,
    EliminarSolicitudComponent,
    ClienteVehiculoComponent,
    VerVehiculoComponent,
    CrearPuntoComponent,
    EditarPuntoComponent,
    EliminarPuntoComponent,
    BuscarPuntoComponent,
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
