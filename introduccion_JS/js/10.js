// Objetos 

/* const nombreProducto = "Monitor 20 Pulgadas"
const precio = 300
const disponible = true  */

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

/* console.log(producto)

console.log(producto.nombreProducto)
console.log(producto.precio)
console.log(producto.disponible) */

//agregar propiedades
producto.imagen = 'imagen.jpg'
 //eliminar propiedades
 delete producto.disponible
 console.log(producto)