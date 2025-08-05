// Classes

class Producto {
  constructor(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
  }
  formatearProducto() {
    return `El Producto ${this.nombre} tiene un precio de $${this.precio} y esta ${this.disponible}`;
  }
}

const producto2 = new Producto(
  'Monitor Curvo de 40"',
  800,
  false ? "disponible" : "agotado"
);
const producto3 = new Producto(
  "Laptop",
  300,
  true ? "disponible" : "agotado"
);
const producto4 = new Producto(
  "Televisión de 50 pulgadas",
  2000,
  false ? "disponible" : "agotado"
);
const producto5 = new Producto(
  "Audifonos de DJ",
  600,
  true ? "disponible" : "agotado"
);

//clase hija
class Libro extends Producto {
    constructor(nombre, precio, disponible, isbn) {
        super(nombre, precio, disponible)
        this.isbn = isbn
    }
    formatearLibro() {
    return `${super.formatearProducto()}, isbn: ${this.isbn}`;
  }
}

const libro = new Libro('Harry Potter', 900, false ? "disponible" : "agotado", '897613857498165')

console.log(producto2);
console.log(producto3.formatearProducto());
console.log(libro)
console.log(libro.formatearLibro())
