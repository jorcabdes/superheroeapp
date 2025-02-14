import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  {FormsModule} from '@angular/forms';
import { PersonajeComponent } from './personaje/personaje.component';
import { TodoslospersonajesComponent } from './todoslospersonajes/todoslospersonajes.component';
import {RouterModule, Routes} from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { InformacionComponent } from './informacion/informacion.component';

const appRoutes:Routes = [
  {path:"",component: InicioComponent},
  {path:"informacion",component: InformacionComponent},
  {path:"buscar",component: TodoslospersonajesComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    PersonajeComponent,
    TodoslospersonajesComponent,
    InicioComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
