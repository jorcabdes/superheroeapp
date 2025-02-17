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
  getUsuario(): string | null {
    return localStorage.getItem("logeado"); // Retorna el usuario guardado o null si no existe
  }
  
  getFav(): any[] {
    return JSON.parse(localStorage.getItem("favoritos") || '[]'); // Retorna un array
  }
}
