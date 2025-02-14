import { Component } from '@angular/core';
import { Router, RouterConfigurationFeature } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'superheroapp';
  logeado:boolean = false;

  constructor(private rute:Router){

  }
  
  login(){
    this.rute.navigate(["login"]);
    
  }
}
