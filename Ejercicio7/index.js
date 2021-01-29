"use strict";
//Ejercicio de comprobación de un número: ¿es par o impar? Creación de funciones.

console.log ("Probando");
function checkNumber (numero) {
    var resto = numero % 2;
    if (resto === 0) {
        console.log ("Número par");
    } else {
        console.log ("Número impar.")
    }    
}
