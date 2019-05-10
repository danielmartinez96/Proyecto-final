import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './autenticacion/login/login.component';
import { AppComponent } from './app.component';
import { AutenticacionGuard } from './autenticacion/autenticacion.guard';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FormProyectoComponent } from './proyectos/form-proyecto/form-proyecto.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'proyectos',
    component: ProyectosComponent
  },
  {
    path: 'crear-proyecto',
    component: FormProyectoComponent
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AutenticacionGuard]
  },
  {
    path: '**',
    component: HomeComponent,
    canActivate: [AutenticacionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
