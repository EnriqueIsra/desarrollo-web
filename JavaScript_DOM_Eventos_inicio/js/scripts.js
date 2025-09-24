// querySelector -> deevuelve 0 o 1 elemento
const heading = document.querySelector(".header__texto h2");
// console.log(heading);

//querySelectorAll -> devuelve 0 o todos los elementos que coincidan
const enlaces = document.querySelectorAll(".navegacion a");
// console.log(enlaces);
// console.log(enlaces[0]);
enlaces[0].textContent = "Nuevo texto para enlace";
enlaces[0].classList.add("nueva-clase");
//enlaces[0].classList.remove("navegacion__enlace")

//getElementById
const heading2 = document.getElementById("heading");
// console.log(heading2);

// Genera enlace

const nuevoEnlace = document.createElement("A");
//agregar href
nuevoEnlace.href = "nuevo-enlace.html";
//agregar texto
nuevoEnlace.textContent = "Tienda Virtual";
//agregar clase
nuevoEnlace.classList.add("navegacion__enlace");
// agregar al documento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

// console.log(nuevoEnlace);

// Eventos

// console.log(1);

// window.addEventListener("load", function () {
//   console.log(2);
// });
// window.onload = function () {
//   console.log(3);
// };
// document.addEventListener('DOMContentLoaded', function () {
//     console.log(4)
// })

// console.log(5)

// window.onscroll = function(){
//     console.log('scrolling...')
// }

// Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario')
// btnEnviar.addEventListener('click', function(evento) {
//   console.log(evento)
//   evento.preventDefault()

//   // validar un formulario con preventDefault()
//   console.log('enviando formulario')
// })

// Eventos de los Inputs y Textarea

const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

// El evento de Submit
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  // Validar el formulario
  const {nombre, email, mensaje} = datos;
  if (nombre === "" || email === "" || mensaje === "") {
    mostrarAlerta("Todos los campos son obligatorios", true);
    return; // Corta la ejecucion del código
  }

  //Crear la alerta de Enviar correctamente
  // Enviar el formulario
  // console.log("Enviando Formulario");
  mostrarAlerta("Mensaje enviado con éxito")
});

function leerTexto(e) {
  // console.log(e.target.value)
  datos[e.target.id] = e.target.value;
  // console.log(datos)
}

function mostrarAlerta(mensaje, error = null){
  const alerta = document.createElement('P');
  alerta.textContent = mensaje;

  if(error) {
    alerta.classList.add('error')
  } else {
    alerta.classList.add('exito')
  }

  formulario.appendChild(alerta)

  // desaparezca después de 5 segundos
  setTimeout(() => {
    alerta.remove();
  }, 5000);

}


