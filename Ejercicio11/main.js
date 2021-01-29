"use strict";
//Este código calcula la media en un array de números
console.log("Probando");
const times = [60, 75, 79, 80, 55, 59];
const total = times.reduce ((accumulator, currentValue) => accumulator + currentValue, 0);
const media = total / times.length;
console.log ("La media es", media);