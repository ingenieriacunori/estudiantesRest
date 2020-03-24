import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EstudianteComponent } from './estudiante/estudiante.component';


const routes: Routes = [
  {
    path: '', component: InicioComponent
  },
  {
    path: 'estudiantes', component: EstudianteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
