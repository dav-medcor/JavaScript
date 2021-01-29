console.log ("Probando")
//Dimensiones del cubo: h=13; b= 23; p=16
const base = 23;
const altura = 13;
const profundidad = 16;
const volumen = base * altura * profundidad;
console.log ("La base es", base,"\n","La altura es", altura,"\n","La profundidad es", profundidad);
console.log ("El volumen total es", volumen, "centímetros cúbicos.");

//El área es: área lateral + 2 veces el área de la base.
// A = al + 2ab
const areaLateral = base * altura;
const areaBase = base * profundidad;
const area = areaLateral + 2 * areaBase;
console.log ("El área es", area, "centímetros cuadrados.");