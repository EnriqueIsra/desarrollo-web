// for loop

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(`El número ${i} es impar`);
  } else {
    console.log(`El número ${i} es par`);
  }
}

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

for (let i = 0; i <= carrito.length; i++) {
  let total = carrito[i].precio * carrito[i].cantidad;
  console.log(
    carrito[i].nombre +
      " - $" +
      carrito[i].precio +
      " - unidades: " +
      carrito[i].cantidad +
      " - Total = $" +
      carrito[i].precio * carrito[i].cantidad
  );
}
