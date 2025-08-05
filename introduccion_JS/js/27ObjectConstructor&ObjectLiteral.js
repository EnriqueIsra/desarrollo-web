// POO 

// Object Literal 
const producto = {
    nombre: 'Tablet',
    precio: 500,
    disponible: true ? 'disponible' : 'no disponible'
}

// Object Constructor
function Cliente(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

// con prototype puedo crear funciones que solo se van a utilizar en un objeto en específico
Cliente.prototype.clientePremium = function(){
    return `Cliente: ${this.nombre} ${this.apellido}, es premium`
}

function Producto(nombre, precio, disponible){
    this.nombre = nombre
    this.precio = precio
    this.disponible = disponible
}
 // con prototype puedo crear funciones que solo se van a utilizar en un objeto en específico
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de $${this.precio} y esta ${this.disponible}`
}

const producto2 = new Producto('Monitor Curvo de 40"', 800, false ? 'disponible' : 'NO disponible')
const producto3 = new Producto('Laptop', 300, true ? 'disponible' : 'NO disponible')
const producto4 = new Producto('Televisión de 50 pulgadas', 2000, false ? 'disponible' : 'NO disponible')
const producto5 = new Producto('Audifonos de DJ', 600, true ? 'disponible' : 'NO disponible')
const cliente = new Cliente('Enrique', 'Torres')

console.log(cliente)
console.log(cliente.clientePremium())
console.log(producto)
console.log(producto2)
console.log(producto2.formatearProducto())
console.log(producto3)
console.log(producto4)
console.log(producto5.formatearProducto())
