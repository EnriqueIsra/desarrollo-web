// Classes

class Producto {
  constructor(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
  }
  formatearProducto() {
    return `El producto ${this.nombre} tiene un precio de $${this.precio} y esta ${this.disponible}`;
  }
}

const producto2 = new Producto(
  'Monitor Curvo de 40"',
  800,
  false ? "disponible" : "NO disponible"
);
const producto3 = new Producto(
  "Laptop",
  300,
  true ? "disponible" : "NO disponible"
);
const producto4 = new Producto(
  "Televisión de 50 pulgadas",
  2000,
  false ? "disponible" : "NO disponible"
);
const producto5 = new Producto(
  "Audifonos de DJ",
  600,
  true ? "disponible" : "NO disponible"
);

console.log(producto2);
console.log(producto3.formatearProducto());
