"use strict";
//Este código filtra un array para separar sus números en pares e impares
console.log("Probando")
const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
console.log ("El array inicial es", number);
const numberPares = number.filter (number => number % 2 === 0);
const numberImpares = number.filter (number => number % 2 !== 0);
console.log("el array con números pares es", numberPares);
console.log ("el array con números impares es", numberImpares);