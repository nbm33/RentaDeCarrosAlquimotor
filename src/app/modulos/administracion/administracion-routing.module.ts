import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { BuscarVehiculoComponent } from './vehiculos/buscar-vehiculo/buscar-vehiculo.component';
import { CrearVehiculoComponent } from './vehiculos/crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './vehiculos/editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculos/eliminar-vehiculo/eliminar-vehiculo.component';

const routes: Routes = [
  { 
    path: 'crear-usuario',
    component: CrearUsuarioComponent
  },
  { 
    path: 'editar-usuario',
    component: EditarUsuarioComponent
  },
  { 
    path: 'crear-vehiculo',
    component: CrearVehiculoComponent
  },
  { 
    path: 'eliminar-vehiculo/:id',
    component: EliminarVehiculoComponent
  },
  { 
    path: 'editar-vehiculo/:id',
    component: EditarVehiculoComponent
  },
  { 
    path: 'buscar-vehiculo',
    component: BuscarVehiculoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
