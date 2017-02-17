import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HelloUserComponent } from './hello-user.component';
import { MapComponent } from './map.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PlazasListComponent } from './listadoPlazas/plazas-list.component';
import { ZonaDeseadaComponent } from './zonasDeseadas/zona-deseada.component';
import { EditarUsuarioComponent } from './editarUsuario/editar-usuario.component';
import { CrearPropuestaComponent } from './crearPropuesta/crear-propuesta.component';
import { EditarPlazaComponent } from './editarPlaza/editar-plaza.component';
import { ListarPropuestasEnviadasComponent } from './listarPropuestas/listar-propuestas-enviadas.component';
import { ListarPropuestasRecibidasComponent } from './listarPropuestas/listar-propuestas-recibidas.component';

import { AlertComponent } from './_directives/index';
import { AlertService, AuthenticationService, UserService, GeocodingService, PropuestaService, PlazaService} from './_services/index';
import { ZonaDeseadaService } from './zonasDeseadas/zona-deseada.service';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, AppRoutingModule, MaterialModule.forRoot(), AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA0Bx2IH546c7E3E5mqtSwQq8z-inqpWts'
    }) ],
  declarations: [
  		AppComponent,
  		AlertComponent,
  		HelloUserComponent,
  		PlazasListComponent,
  		MapComponent,
  		LoginComponent,
  		RegisterComponent, 
  		ZonaDeseadaComponent,
  		CrearPropuestaComponent,
  		EditarUsuarioComponent,
  		EditarPlazaComponent,
  		ListarPropuestasEnviadasComponent,
  		ListarPropuestasRecibidasComponent
  	],
  providers: [
        AlertService,
        AuthenticationService,
        PlazaService,
        ZonaDeseadaService,
        GeocodingService,
        GoogleMapsAPIWrapper,
        PropuestaService,
        UserService
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
