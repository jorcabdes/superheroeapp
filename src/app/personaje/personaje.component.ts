import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Personaje } from '../../personaje.module';

@Component({
  selector: 'app-personaje',
  standalone: false,
  
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.scss'
})
export class PersonajeComponent {
  constructor(){
    
  }
  ngOnInit(){

  }
  @Input() personaje:Personaje;

}
