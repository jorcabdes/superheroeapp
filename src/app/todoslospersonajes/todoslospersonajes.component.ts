import { Component } from '@angular/core';
import { Personaje } from '../../personaje.module';
import { Conexionapi } from '../../conexionapi.module';
import { Router, RouterConfigurationFeature } from '@angular/router';
//import { AusServiceService } from '../aus-service.service';

@Component({
  selector: 'app-todoslospersonajes',
  standalone: false,
  
  templateUrl: './todoslospersonajes.component.html',
  styleUrl: './todoslospersonajes.component.scss'
})
export class TodoslospersonajesComponent {

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

  async recibirdatosarra(){
    try{
      this.todo = await this.api.buscarporcantidad(this.max,this.min) as Personaje[];
      //this.todo.push(persona);
      //console.log(this.todo);
    }catch(error){
        console.error(error);
    }
  }
  async recibirdatosbusqueda(texto:string){
    try{
      console.log(texto);
      this.todo = await this.api.buscarpornombreuper(texto,this.filtroSeleccionado) as Personaje[];
      if(this.todo.length == 0){
        this.recibirdatosarra();
      }
      console.log(this.todo);
    }catch(error){
        console.error(error);
    }
  }
  filtrarbuenosmalos(){

  }
  filtrar(textoabuscar:string){
    this.recibirdatosbusqueda(textoabuscar);
    console.log(this.todo)
  }
  crear(){
   this.recibirdatosarra();
    console.log(this.filtroSeleccionado);
  }

  sumarypintar(textoabuscar:string){
    console.log(textoabuscar);
    if(textoabuscar==""){
      if(this.max!=731){
        this.min = this.min+10;
        this.max = this.max+10;
        this.recibirdatosarra();
        //console.log(this.todo);
      }else if(this.max == 731){
        this.min = this.min+10;
        this.max = this.max+1;
        this.recibirdatosarra();
        //console.log(this.max);
      }
    }
  }
  restarypintar(textoabuscar:string){
    if(textoabuscar==""){
      if(this.min!=1 && this.max!=732){
        this.min = this.min -10;
        this.max = this.max -10;
        this.recibirdatosarra();
      }else if(this.max == 732){
        this.min = this.min-10;
        this.max = this.max-1;
        this.recibirdatosarra();
      }
    }
  }
}
