//https://cors-anywhere.herokuapp.com/corsdemo
export class Personaje{
        id: number;
        name: string;
        powerstats: {
            inteligencia: number;
            fuerza: number;
            velocidad: number;
            durabilidad: number;
            potencia: number;
            combate: number;
        };
        biografia: {
            nombreCompleto: string;
            alterEgos: string;
            alias: string[];
            lugarDeNacimiento: string;
            primeraAparicion: string;
            editorial: string;
            alineacion: string;
        };
        apariencia: {
            genero: string;
            raza: string;
            altura: string;
            peso: string;
            colorDeOjos: string;
            colorDePelo: string;
        };
        image: {
            url: string;
        };
    
        constructor(data: any) {
            this.id = data.id;
            this.name = data.name;
            this.powerstats = this.powerstats = {
                inteligencia: data.powerstats?.intelligence || 0,
                fuerza: data.powerstats?.strength || 0,
                velocidad: data.powerstats?.speed || 0,
                durabilidad: data.powerstats?.durability || 0,
                potencia: data.powerstats?.power || 0,
                combate: data.powerstats?.combat || 0,
              };
            this.biografia = {
                nombreCompleto: data.biography["full-name"],
                alterEgos: data.biography["alter-egos"],
                alias: data.biography["aliases"],
                lugarDeNacimiento: data.biography["place-of-birth"],
                primeraAparicion: data.biography["first-appearance"],
                editorial: data.biography["publisher"],
                alineacion: data.biography["alignment"]
            };
            this.apariencia = {
                genero: data.appearance["gender"],
                raza: data.appearance.race,
                altura: data.appearance.height[1],
                peso: data.appearance.weight[1],
                colorDeOjos: data.appearance["eye-color"],
                colorDePelo: data.appearance["hair-color"]
            };
            this.image = data.image;
        }
}