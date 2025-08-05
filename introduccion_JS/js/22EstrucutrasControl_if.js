const puntaje = 100;

if(puntaje === 1000) {
    console.log("El puntaje es igual a 1000")
} else {
    console.log("El puntaje no es igual a 1000")
}

const efectivo = 1000;
const carrito = 1100;

if(efectivo > carrito){
    console.log("Efectuando pago...\nPago realizado con éxito\nEl cambio es de: " + (efectivo - carrito))
} else {
    console.log("Error al realizar el pago\n*Fondos insuficientes*")
}

const rol = "OTRO"

if(rol === "ADMIN"){
    console.log("Bienvenido Admin. Tienes todos los privilegios")
} else if (rol === "EDITOR") {
    console.log("Bienvenido usuario Editor. Tienes privilegios limitados")
} else {
    console.log("Bienvenido, eres un visitante, no tienes privilegios, solo puedes leer recursos")
}

