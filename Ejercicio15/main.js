"use strict";
/*Este código devuelve la ganadora a partir de la tabla de resultados de 100m. femeninos Rio 2016*/

console.log("Probando");
const scores = [
    {name: 'Christania Williams', country: 'Jamaica', time: 11.80},
    {name: 'Elaine Thompson', country: 'Jamaica', time: 10.71},
    {name: 'Tori Bowie', country: 'EEUU', time: 10.83},
    {name: 'Marie Josée Ta Lou', country: 'Irlanda', time: 10.86},
    {name: 'Dafne Schippers', country: 'Holanda', time: 10.90},
    {name: 'English Gardner', country: 'EEUU', time: 10.94},
    {name: 'Michelle-Lee Ahye', country: 'Trinidad', time: 10.92},
    {name: 'JamaicaShelly-Ann Fraser-Pryce', country: 'Jamaica', time: 10.86}
  ];

/* Es necesario devolver acc o cValue, que son cada objeto del array, es decir, aquello a lo que puede
aplicársele la función */

const winner = scores.reduce ((acc, cValue) => {
    if (acc.time < cValue.time) {
        console.log ("Devuelvo", acc) //Esto se escribe para monitorizar lo que está ocurriendo en el proceso
        return acc
    } else {
        console.log ("Devuelvo", cValue) //Esto se escribe para monitorizar lo que está ocurriendo en el proceso
        return cValue
    }
}, scores[0]);

console.log (winner)



/*Si se aplica el siguiente código, según el cual se devuelve la propiedad time de cada objeto el resultado
es el último time que pasa por el proceso. El motivo es que esta función devuelve objetos, no propiedades 
de los mismos*/

console.log ("Prueba de un código alternativo:")

const winner2 = scores.reduce ((acc, cValue) => {
    if (acc.time < cValue.time) {
        console.log ("Devuelvo", acc.time)
        return acc.time
    } else {
        console.log ("Devuelvo", cValue.time)
        return cValue.time
    }
}, scores[0]);

console.log (winner2)
