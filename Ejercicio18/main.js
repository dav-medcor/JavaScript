/*Con este código se accede a los nodos del HTML con el objetivo de mostrar en pantalla el número de enlaces,
la dirección a la que enlaza el penúltimo enlace y el número de enlaces del tercer párrafo*/

const enlaces = document.getElementsByTagName("a");
alert ("El número de enlaces en esta página es " + enlaces.length);

alert ("La dirección del penúltimo enlace es: "+ enlaces[enlaces.length - 2]);

const tercerParrafo = document.getElementById ("third-paragraph");
const enlacesTercerParrafo = tercerParrafo.getElementsByTagName ("a");
alert("El número de enlaces del tercer párrafo es " + enlacesTercerParrafo.length);