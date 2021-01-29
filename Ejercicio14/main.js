"use strict";
/*Este código muestra una frase a cada usuario premium de un array de objetos y crea 
un nuevo array con los usuarios no premium.*/

console.log ("Probando");
const users = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: true},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 30, premium: false},
    {username: 'sergio58', age: 30, premium: true},
    ];

const usersPremium = users.filter (user => user.premium === true);
const Mensajes = usersPremium.map (user => {
    if (user.premium === true) {
        console.log (user.username, "Gracias por ser premium");
    }
})


const usersNoPremium = users.filter (user => user.premium === false);
console.log ("Los usuarios no Premium son", usersNoPremium);