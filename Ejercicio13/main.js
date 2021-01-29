"use strict";

/*Este script convierte un array con los meses en minúsculas en otro con los meses con más de 7 letras 
en mayúsculas. A continuación dice cuántos meses son*/

console.log ("Probando");
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", 
"octubre", "noviembre", "diciembre"];
const mesesUp7 = meses.filter (mes => mes.length > 7);
console.log ("Los meses con más de siete letras son", mesesUp7);
const mesesUp7Mayus = mesesUp7.map (mes => mes.toUpperCase());

console.log ("Los meses con más de 7 letras y en mayúsculas son", mesesUp7Mayus);

const numeroMeses = mesesUp7Mayus.length
console.log ("El número de meses que cumplen con esta condición es", numeroMeses);