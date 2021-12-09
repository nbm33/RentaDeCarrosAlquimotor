import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { BuscarSolicitudComponent } from './solicitud/buscar-solicitud/buscar-solicitud.component';
import { CrearSolicitudComponent } from './solicitud/crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './solicitud/editar-solicitud/editar-solicitud.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { BuscarVehiculoComponent } from './vehiculos/buscar-vehiculo/buscar-vehiculo.component';
import { ClienteVehiculoComponent } from './vehiculos/cliente-vehiculo/cliente-vehiculo.component';
import { CrearVehiculoComponent } from './vehiculos/crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './vehiculos/editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculos/eliminar-vehiculo/eliminar-vehiculo.component';
import { VerVehiculoComponent } from './vehiculos/ver-vehiculo/ver-vehiculo.component';

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
    path: 'editar-vehiculo',
    component: EditarVehiculoComponent
  },
  { 
    path: 'eliminar-vehiculo',
    component: EliminarVehiculoComponent
  },  
  { 
    path: 'cliente-vehiculo',
    component: ClienteVehiculoComponent
  },
  { 
    path: 'ver-vehiculo/:id',
    component: VerVehiculoComponent
  },
  { 
    path: 'crear-solicitud',
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
