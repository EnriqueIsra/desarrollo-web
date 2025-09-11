// querySelector -> deevuelve 0 o 1 elemento
const heading = document.querySelector(".header__texto h2")
console.log(heading)

//querySelectorAll -> devuelve 0 o todos los elementos que coincidan
const enlaces = document.querySelectorAll(".navegacion a")
console.log(enlaces)
console.log(enlaces[0])
enlaces[0].textContent = "Nuevo texto para enlace"
enlaces[0].classList.add("nueva-clase") 
enlaces[0].classList.remove("navegacion__enlace") 

//getElementById
const heading2 = document.getElementById("heading")
console.log(heading2)

