"use strict";
//Este código convierte todas las palabras de un array en mayúsculas e inverte su orden.
console.log ("Probando");
const topics = ["JavaScript", "Variables", "funciones", "condicionales", "bucles"];
const topicsMayus = topics.map (eachtopic => eachtopic.toUpperCase());
console.log (topicsMayus);
const topicMayusReverse = topicsMayus.reverse();
console.log(topicMayusReverse)

//Otro ejemplo, esta vez con números:
const numbers = [2, 5, 7, 12, 67];
const doubleNumbers = numbers.map (eachnumber => eachnumber * 2);
console.log (doubleNumbers);