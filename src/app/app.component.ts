import { Component } from '@angular/core';
import { Router, RouterConfigurationFeature } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { ServiciologinService } from './serviciologin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'superheroapp';
  usuario: string | null = null;

  constructor(private rute:Router,public dialog: MatDialog,private servicio:ServiciologinService){
    
  }
  ngOnInit() {
    this.usuario = this.servicio.getUsuario();
  }
  login(){
    this.dialog.open(LoginComponent);
  }
  user(){
    this.rute.navigate(["usuario"]);
  }
}
