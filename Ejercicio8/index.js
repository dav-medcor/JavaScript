"use strict";

//Comprobación de una frase para saber si está en mayúsculas, minúsculas o una combinación de ambas.

const frase = prompt ("Por favor, introduce la frase a ser evaluada.");
var fraseMayus = frase.toUpperCase()
var fraseMinus = frase.toLowerCase()

if (frase === fraseMayus) {
    alert ("La frase proporcionada está en mayúsculas.")
} 
else if (frase === fraseMinus) {
    alert ("La frase proporcionada está en minúsculas")
}
else {
    alert("La frase proporcionada presenta una combinación de mayúsculas y minúsculas")
}