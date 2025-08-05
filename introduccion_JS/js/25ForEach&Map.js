const carrito = [
  { nombre: "Monitor 20 pulgadas", precio: 500, cantidad: 1 },
  { nombre: "Televisión 20 pulgadas", precio: 700, cantidad: 2 },
  { nombre: "Tablet", precio: 300, cantidad: 4 },
  { nombre: "Audifonos", precio: 200, cantidad: 6 },
  { nombre: "Teclado", precio: 50, cantidad: 15 },
  { nombre: "Celular", precio: 500, cantidad: 6 },
  { nombre: "Bocinas", precio: 300, cantidad: 1 },
  { nombre: "Laptop", precio: 800, cantidad: 6 },
];

// forEach 

carrito.forEach(producto => { // usar forEach si quiero iterar o mostrar info en consola
    
})
// map

// crear un nuevo arreglo, como para filtrar el nomre y precio
const arreglo2 = carrito.map(producto =>  `${producto.nombre} - ${producto.precio}`);

 console.log(arreglo2); 

