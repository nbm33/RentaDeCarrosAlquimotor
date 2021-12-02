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



@NgModule({
  declarations: [
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    BuscarUsuarioComponent,
    CrearVehiculoComponent,
    BuscarVehiculoComponent,
    EliminarVehiculoComponent,
    EditarVehiculoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdministracionModule { }
