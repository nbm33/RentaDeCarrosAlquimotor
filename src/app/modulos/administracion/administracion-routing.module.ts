import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAsesorComponent } from './asesores/buscar-asesor/buscar-asesor.component';
import { CrearAsesorComponent } from './asesores/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './asesores/editar-asesor/editar-asesor.component';
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
    component: CrearUsuarioComponent
  },
  { 
    path: 'editar-usuario',
    component: EditarUsuarioComponent
  },
  
  { 
    path: 'crear-asesor',
    component: CrearAsesorComponent
  },
  {
    path: "listar-asesores",
    component: BuscarAsesorComponent
  },
  { 
    path: 'editar-asesor',
    component: EditarAsesorComponent
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
  },
  { 
    path: 'ver-vehiculo/:id',
    component: VerVehiculoComponent
  },
  { 
    path: 'cliente-vehiculo',
    component: ClienteVehiculoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
