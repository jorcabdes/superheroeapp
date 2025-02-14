import { Injectable } from '@angular/core';
import { ServiciosdatosService } from './serviciosdatos.service';
import { Usuario } from '../usuario.module';

@Injectable({
  providedIn: 'root'
})
export class ServiciologinService {

  usuarios:Usuario[]=[];
  resultado:boolean = false;
  constructor(private datos:ServiciosdatosService) { 

  }
  comprobarusuario(user:string,passw:string){
    this.usuarios = this.datos.getUsuarios();
    for (let usuario of this.usuarios){
      if(usuario.email == user && usuario.password==passw){
        this.resultado = true;
      }
    } 
    return this.resultado;
  }
}
