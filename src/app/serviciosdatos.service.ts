import { Injectable } from '@angular/core';
import { Usuario } from "../usuario.module";


@Injectable({
  providedIn: 'root'
})
export class ServiciosdatosService {

  users:Usuario[] = [
    { email: "juan@example.com", password: "Juan1234!" },
    { email: "maria@example.com", password: "Maria5678@" },
    { email: "carlos@example.com", password: "Carlos91011#" },
    { email: "ana@example.com", password: "Ana1213$" },
    { email: "pedro@example.com", password: "Pedro1415%" }
  ];

  constructor() {
  }
  getUsuarios(){
    return this.users;
  }
}
