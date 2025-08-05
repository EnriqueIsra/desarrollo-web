// Arrow Functions

const sumar2 = function(n1, n2){
    console.log(n1 + n2)
}

sumar2(10, 5);

const aprendiendoArrowFunction = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`)
}

aprendiendoArrowFunction('JavaScript')

// array methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']
const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Televisión 20 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800}
]

// forEach
meses.forEach(mes => {
    if(mes == 'Marzo'){
        console.log('Marzo si existe')
    }
})

let resultado;
// Includes
//const resultado = meses.includes('Marzo')
//console.log(resultado)

// Some ideal para arreglo de objetos
resultado = carrito.some( producto => producto.nombre === 'Celular')
console.log(resultado) 

// reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0)
console.log(resultado)

//filter
resultado = carrito.filter( producto => producto.precio > 400)
console.log(resultado)

resultado = carrito.filter(producto => producto.nombre === 'Celular')
console.log(resultado)

resultado = carrito.filter(producto => producto.nombre !== 'Celular') 
console.log(resultado)
