import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { CrearVehiculoComponent } from './vehiculos/crear-vehiculo/crear-vehiculo.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
