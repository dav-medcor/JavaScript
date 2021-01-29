"use strict";
//Ejercicio letra DNI
console.log ("Probando");
const letras =['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 
'H', 'L', 'C', 'K', 'E', 'T'];
var numeroDNI = prompt ("Por favor, ingrese el número de su DNI.");
if (numeroDNI < 0 || numeroDNI > 99999999) {
    alert ("El número proporcionado no es válido");
} else {
    const indice = numeroDNI % 23;
    alert ("La letra que corresponde a tu DNI es " + letras[indice]);
}