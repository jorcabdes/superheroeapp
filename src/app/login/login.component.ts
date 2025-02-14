import { Component } from '@angular/core';
import { ServiciologinService } from '../serviciologin.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email:string = "";
  password:string = "";
  logeado:boolean = false;

  constructor(private servicio:ServiciologinService){

  }
  hacerlogin(){
    this.logeado = this.servicio.comprobarusuario(this.email,this.password);
    localStorage.setItem('logeado',JSON.stringify(this.logeado));
  }

}
