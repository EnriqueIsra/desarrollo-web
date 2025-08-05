const metodoPago = "";

switch (metodoPago) {
  case "efectivo":
    console.log("Transacción en efectivo");
    break;
  case "tarjeta":
    console.log("Transacción con tarjeta");
    break;
  case "cheque":
    console.log("Transacción con cheque");
    break;
  default:
    console.log("No se ah realizado ninguna transacción");
    break;
}
