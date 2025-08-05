//"use strict" // correr javascript en modo estricto

// modificando objetos con freeze y seal

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

/* Object.freeze(producto) // freeze no dejará hacer ni si quiera un cambio a ninguna propiedad
 producto.imagen = 'imageb.jpg'

console.log(Object.isFrozen(producto))

console.log(producto) */

Object.seal(producto)  // seal permite unicamente modificar las propiedades de un objeto, pero tampoco deja eliminar ni agregar nuevas
producto.precio = 'NUEVO PRECIO'
producto.imagen = 'imagen.jpg'
delete producto.precio
console.log(Object.isSealed(producto))

console.log(producto)
