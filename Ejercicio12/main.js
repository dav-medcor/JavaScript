"use strict";
//Código que devuelve la palabra más larga de un array
console.log("Probando");
const words = ["Environmental", "Systems", "Research", "Institute"];
const wordsLongitud = words.reduce((acc, currentValue) => {
    if (currentValue.length > acc.length) {
        return currentValue;
    } else {
        return acc;
    }
});

console.log ("La palabra más larga es", wordsLongitud)