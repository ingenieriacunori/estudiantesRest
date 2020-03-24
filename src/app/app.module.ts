import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Clase HttpClient servicios REST
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { CrearEstudianteComponent } from './estudiante/crear-estudiante/crear-estudiante.component';
import { ListarEstudianteComponent } from './estudiante/listar-estudiante/listar-estudiante.component';
import { InicioComponent } from './inicio/inicio.component';

import { EstudianteService } from './shared/servicios/estudiante.service';

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    CrearEstudianteComponent,
    ListarEstudianteComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EstudianteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
