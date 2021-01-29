"use strict";
//Ejercicio de cálculo de notas en un array usando un bucle
console.log ("Probando");
const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];

//Usando el bucle for:
var acc = 0;
for (var i = 0; i < notas.length; i++) {
    var notaTotal = acc += notas[i];
};
console.log ("Con el bucle for la nota final es", notaTotal)

//Usando el bucle for...of:
var acc2 = 0
for (var nota of notas) {
    var notaFinal = acc2 += nota;
}
console.log ("Con el bucle for...of la nota final es", notaFinal)