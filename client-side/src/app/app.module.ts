import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './autenticacion/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AutenticacionService } from './autenticacion/autenticacion.service';
import { MaterialModule } from './material';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FormProyectoComponent } from './proyectos/form-proyecto/form-proyecto.component';
import { DataTableComponent } from './shared/data-table/data-table.component';
import { TableProyectoComponent } from './proyectos/table-proyecto/table-proyecto.component';
import { ProyectoService } from './services/proyecto.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
    SideBarComponent,
    HomeComponent,
    ProyectosComponent,
    FormProyectoComponent,
    DataTableComponent,
    TableProyectoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    AutenticacionService,
    ProyectoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
