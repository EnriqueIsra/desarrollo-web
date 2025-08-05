function sumar(n1, n2){
    return n1 + n2;
}

const resultado = sumar(2, 3);
console.log(resultado);
console.log("Carrito *******************");

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return total * 0.15;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

const impuesto = calcularImpuesto(total)
const totalTotal = total + impuesto

console.log(`El total a pagar sin impuestos es de: $${total}`)
console.log(`El valor del impuesto es de: $${impuesto}`)
console.log(`El total a pagar con impuestos es de: $${totalTotal}`);

