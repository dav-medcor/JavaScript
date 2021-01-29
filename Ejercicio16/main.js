"use strict";
/*Se utilizan las clases para calcular directamente el perímetro y área de tres cuadrados que se cargarán como instancias*/

console.log("Probando")

class Cuadrado {
    constructor (lado){
        this.perimetro = lado * 4;
        this.area = lado * lado;
        console.log ("Este cuadrado tiene", lado, "centímetros de lado. Su área es de", this.area, 
        "centímetros cuadrados y su perímetro es de", this.perimetro, "centímetros.");
    }
    }

const pequeño = new Cuadrado (2);
const mediano = new Cuadrado (5);
const grande = new Cuadrado (10);
