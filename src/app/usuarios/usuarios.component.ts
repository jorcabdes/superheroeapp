import { Component } from '@angular/core';
import { Personaje } from '../../personaje.module';
import { Conexionapi } from '../../conexionapi.module';
import { Router, RouterConfigurationFeature } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {
  filtroSeleccionado:string = "all";
    todo: Personaje[];
    api: Conexionapi;
    max:number;
    min:number;
  
    constructor(private rute:Router){
      this.api = new Conexionapi();
      this.todo = []; 
      this.max = 11;
      this.min = 1;
    }
    ngOnInit(){
      this.crear();
    }
  
    async recibirtodoslosdatos(id:number){
      try{
        const persona = await this.api.buscarpornumerosuper(id) as Personaje;
        this.todo.push(persona);
      }catch(error){
          console.error(error);
      }
    }
  
   
    crear(){
      let favs = JSON.parse(localStorage.getItem('favoritos') || '[]');
      for (let i = 0; i < favs.length; i++) {
        this.recibirtodoslosdatos(favs[i]);
      }
      console.log(this.filtroSeleccionado);
    }
  
}
