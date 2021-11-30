import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';

const routes: Routes = [
  { 
    path: 'crear-usuario',
    component: CrearUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
