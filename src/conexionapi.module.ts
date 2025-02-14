import { Personaje } from "./personaje.module";

export class Conexionapi{

    url1:string;
    todo:Personaje[];
    //url2:string;

    constructor(){
        this.url1 = "https://cors-anywhere.herokuapp.com/https://www.superheroapi.com/api/fb930356bb96cd2b2c491d699a43a6b2/";
        //this.url2 = 'https://allorigins.win/get?url=' + encodeURIComponent('https://www.superheroapi.com/api/fb930356bb96cd2b2c491d699a43a6b2/');
        this.todo = [];

    }

    async buscarpornumerosuper(ids:number) {

        try {
            const response = await fetch(`${this.url1}${ids}`);
            const data = await response.json();
            //console.log(data);
            const perso = new Personaje(data);
            //console.log(perso);
            return perso;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
    async buscarporcantidad(max:number,min:number) {
        this.todo = [];
        try {
            for (let index = min; index < max; index++) {
                const response = await fetch(`${this.url1}${index}`);
                const data = await response.json();
                //console.log(data);
                const perso = new Personaje(data);
                //console.log(perso);
                this.todo.push(perso);
            }
            return this.todo;
        } catch (error) {
            console.error(error);
            return this.todo;
        }
    }
    async buscarpornombreuper(ids:string,seleccion:string) {
        this.todo = [];
        try {
            const response = await fetch(`${this.url1}/search/${ids}`);
            const data = await response.json();
            if (data.response === 'success' && data.results) {
                if(seleccion === "all"){
                    this.todo = data.results.slice(0, 10).map((result: any) => new Personaje(result));
                }else if(seleccion === "good"){
                    this.todo = data.results
                    .filter((result: any) => result.biography.alignment === 'good')
                    .slice(0, 10)
                    .map((result: any) => new Personaje(result));
                }else if(seleccion === "bad"){
                    this.todo = data.results
                    .filter((result: any) => result.biography.alignment === 'bad')
                    .slice(0, 10)
                    .map((result: any) => new Personaje(result));
                }
            } else {
                console.error('No se encontraron resultados.');
            }
            return this.todo;
        } catch (error) {
            console.error(error);
            return this.todo;
        }
    }
}