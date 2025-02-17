import { Component } from '@angular/core';
import { Personaje } from '../../personaje.module';
import { ActivatedRoute, Router } from '@angular/router';
import { Conexionapi } from '../../conexionapi.module';

@Component({
  selector: 'app-detallespersonajes',
  standalone: false,
  
  templateUrl: './detallespersonajes.component.html',
  styleUrl: './detallespersonajes.component.scss'
})
export class DetallespersonajesComponent {
   fav:number[];
   personaje: Personaje;
   id:string | null; 
   api: Conexionapi;

   constructor(private route: ActivatedRoute,private router: Router) {
    this.api = new Conexionapi;
   }
   ngOnInit(){
    this.fav = [];
    this.id = this.route.snapshot.paramMap.get('id');
    this.crear();
    console.log(this.id);
    console.log(this.personaje);
   }
   async recibirtodoslosdatos(id:number){
    try{
      const persona = await this.api.buscarpornumerosuper(id) as Personaje;
      this.personaje = persona;
    }catch(error){
        console.error(error);
    }
  }
  crear(){
    let result: string = this.id ?? "1";
    this.recibirtodoslosdatos(parseInt(result));
   }
   favorito(){
    const arrayRecuperado = JSON.parse(localStorage.getItem('favoritos') || '[]');
    if (!arrayRecuperado.includes(this.id)) {
      // Comprobar si el array tiene menos de 10 elementos
      if (arrayRecuperado.length < 10) {
        arrayRecuperado.push(this.id);
        localStorage.setItem('favoritos', JSON.stringify(arrayRecuperado));
      }
    }
    console.log(arrayRecuperado);
   }
}
