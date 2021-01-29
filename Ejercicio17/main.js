// En este código se calcula los datos necesarios para una factura utilizando las clases de JS
class Factura {
    constructor (cliente, elementos) {
        this.cliente = cliente;
        this.elementos = elementos;
        this.informacion = { //Esto es una pseudoclase: un objeto dentro de un objeto
            baseImponible: 0,
            iva: 21,
            total: 0,
            formaPago: "Efectivo",
        }
/*Se le añade el método calculoTotal a la factura. Se trata de un bucle que va recorriendo los elementos para
multiplicar sus cantidades por su precio. El resultado se va guardando en la propiedad baseImponible
de la clase factura.*/
        this.calculoTotal = function() {
            for (var i = 0; i < this.elementos.length; i++) {
                this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio
            }
            this.informacion.total = this.informacion.baseImponible * (1 + (this.informacion.iva/100));
        }
/*Se le añade otro método, mostrarTotal. En él se ejecuta el método anterior y se muestra el total en la
pantalla */
        this.mostrarTotal = function() {
            this.calculoTotal();
            alert("El total de la factura es " + this.informacion.total);
        }
    }
}

class cliente {
    constructor (nombre, direccion, telefono, nif) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.nif = nif;
    }
}

class Elemento {
    constructor (descripcion, cantidad, precio) {
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

// A continuación se crea un cliente y una compra para comprobar el código es correcto.

const primerCliente = new cliente ("Juan de Mairena", "Sevilla", "6548795248", "54852498H");
const relacionCompra = [new Elemento ("Bombilla", 2, 5), new Elemento ("Flexo", 2, 25), 
new Elemento ("Cable", 1, 10), new Elemento ("Enchufe", 2, 5)];
const facturaPrimera = new Factura (primerCliente, relacionCompra);
facturaPrimera.mostrarTotal()