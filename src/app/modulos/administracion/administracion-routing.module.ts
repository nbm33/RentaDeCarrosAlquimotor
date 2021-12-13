import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { BuscarSolicitudComponent } from './solicitud/buscar-solicitud/buscar-solicitud.component';
import { CrearSolicitudComponent } from './solicitud/crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './solicitud/editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './solicitud/eliminar-solicitud/eliminar-solicitud.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { BuscarVehiculoComponent } from './vehiculos/buscar-vehiculo/buscar-vehiculo.component';
import { ClienteVehiculoComponent } from './vehiculos/cliente-vehiculo/cliente-vehiculo.component';
import { CrearVehiculoComponent } from './vehiculos/crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './vehiculos/editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculos/eliminar-vehiculo/eliminar-vehiculo.component';
import { VerVehiculoComponent } from './vehiculos/ver-vehiculo/ver-vehiculo.component';
import { EditarPuntoComponent } from './puntoAlquiler/editar-punto/editar-punto.component';
import { EliminarPuntoComponent } from './puntoAlquiler/eliminar-punto/eliminar-punto.component';
import { CrearPuntoComponent } from './puntoAlquiler/crear-punto/crear-punto.component';
import { BuscarPuntoComponent } from './puntoAlquiler/buscar-punto/buscar-punto.component';
import { AsesorSolicitudComponent } from './solicitud/asesor-solicitud/asesor-solicitud.component';
import { CrearTarjetaComponent } from './tajertacredito/crear-tarjeta/crear-tarjeta.component';

const routes: Routes = [
  { 
    path: 'crear-usuario',
    component: CrearUsuarioComponent,
  },
  { 
    path: 'editar-usuario',
    component: EditarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  { 
    path: 'crear-vehiculo',
    component: CrearVehiculoComponent
  },
  { 
    path: 'buscar-vehiculo',
    component: BuscarVehiculoComponent
  },
  { 
    path: 'editar-vehiculo/:id',
    component: EditarVehiculoComponent
  },
  { 
    path: 'eliminar-vehiculo/:id',
    component: EliminarVehiculoComponent
  },  
  { 
    path: 'ver-vehiculo/:id',
    component: VerVehiculoComponent
  },
  { 
    path: 'cliente-vehiculo',
    component: ClienteVehiculoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  { 
    path: 'editar-punto/:id',
    component: EditarPuntoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  { 
    path: 'eliminar-punto/:id',
    component: EliminarPuntoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  { 
    path: 'crear-punto',
    component: CrearPuntoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  { 
    path: 'buscar-punto',
    component: BuscarPuntoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-solicitud/:idVehiculo',
    component: CrearSolicitudComponent
  },
  { 
    path: 'buscar-solicitud',
    component: BuscarSolicitudComponent
  },
  { 
    path: 'editar-solicitud/:id',
    component: EditarSolicitudComponent
  },
  { 
    path: 'eliminar-solicitud/:id',
    component: EliminarSolicitudComponent
  },
  { 
    path: 'asesor-solicitud',
    component: AsesorSolicitudComponent
  },
  {
    path: 'crear-tarjeta',
  component: CrearTarjetaComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
