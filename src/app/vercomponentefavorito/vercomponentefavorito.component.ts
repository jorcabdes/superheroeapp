import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Personaje } from '../../personaje.module';

@Component({
  selector: 'app-vercomponentefavorito',
  standalone: false,
  
  templateUrl: './vercomponentefavorito.component.html',
  styleUrl: './vercomponentefavorito.component.scss'
})
export class VercomponentefavoritoComponent {
  
    constructor(){
      
    }
    ngOnInit(){
      
    }
    @Input() personaje:Personaje;
    eliminar(){
      let favs = JSON.parse(localStorage.getItem('favoritos') || '[]');
      const index = favs.indexOf(this.personaje.id);
      if (index !== -1) {
        favs.splice(index, 1);
        localStorage.setItem('favoritos', JSON.stringify(favs));
      }
      window.location.reload();
    }
  
}
