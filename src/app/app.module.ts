import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './plantilla/barra-navegacion/barra-navegacion.component';
import { PiePaginaComponent } from './plantilla/pie-pagina/pie-pagina.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { AdministracionModule } from './modulos/administracion/administracion.module';
import { SeguridadModule } from './modulos/seguridad/seguridad.module';
import { VehiculosComponent } from './plantilla/vehiculos/vehiculos.component';
import { ContactoComponent } from './plantilla/contacto/contacto.component';
import { SolicitudComponent } from './plantilla/solicitud/solicitud.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    PiePaginaComponent,
    InicioComponent,
    ErrorComponent,
    VehiculosComponent,
    ContactoComponent,
    SolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdministracionModule,
    SeguridadModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
