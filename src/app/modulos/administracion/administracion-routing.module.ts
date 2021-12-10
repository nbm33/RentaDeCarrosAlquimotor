import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
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
    component: CrearVehiculoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  { 
    path: 'eliminar-vehiculo/:id',
    component: EliminarVehiculoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  { 
    path: 'editar-vehiculo/:id',
    component: EditarVehiculoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  { 
    path: 'buscar-vehiculo',
    component: BuscarVehiculoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  { 
    path: 'ver-vehiculo/:id',
    component: VerVehiculoComponent,
    canActivate: [ValidadorSesionGuard]
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
