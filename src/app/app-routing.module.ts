import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioClaveComponent } from './modulos/seguridad/cambio-clave/cambio-clave.component';
import { IdentificacionComponent } from './modulos/seguridad/identificacion/identificacion.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { CrearUsuarioComponent } from './modulos/administracion/usuario/crear-usuario/crear-usuario.component';

const routes: Routes = [
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path:"",
    pathMatch: "full",
    redirectTo: "/inicio"
  },
  { 
    path: 'identificacion',
    component: IdentificacionComponent
  },
  { 
    path: 'recuperar-clave',
    component: IdentificacionComponent
  },
  { 
    path: 'cambio-clave',
    component: CambioClaveComponent
  },
  { 
    path: 'crear-usuario',
    component: CrearUsuarioComponent
  },
  // { 
  //   path: 'seguridad/cambio-clave',
  //   component: CambioClaveComponent
  // },
  // { 
  //   path: 'seguridad/cambio-clave',
  //   component: CambioClaveComponent
  // },
  // { 
  //   path: 'seguridad',
  //   loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  // },
  // { 
  //   path: 'administracion',
  //   loadChildren: () => import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
  // },
  {
    path:"**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
