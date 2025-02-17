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
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DetallespersonajesComponent } from './detallespersonajes/detallespersonajes.component';
import { VercomponentefavoritoComponent } from './vercomponentefavorito/vercomponentefavorito.component';

const appRoutes:Routes = [
  {path:"",component: InicioComponent},
  {path:"informacion",component: InformacionComponent},
  {path:"buscar",component: TodoslospersonajesComponent},
  {path:"usuario",component: UsuariosComponent},
  {path:"detallesperso/:id",component: DetallespersonajesComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    PersonajeComponent,
    TodoslospersonajesComponent,
    InicioComponent,
    InformacionComponent,
    UsuariosComponent,
    LoginComponent,
    DetallespersonajesComponent,
    VercomponentefavoritoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
