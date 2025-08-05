// arreglos o arrays

const numeros = [10, 20, 30, 40, 50]
console.table(numeros)



/* //acceder a los valores de un arreglo
console.log(meses[4])
console.log(numeros[4])

meses.forEach(function(mes){
    console.log(mes)
})
numeros.forEach(function(numero){
    console.log(numero)
})

//conocer la extensión de un arreglo
console.log(meses.length) */

numeros.push(60, 70, 80) // agregar deatos al final del arreglo
numeros.unshift(-10, -20, -30) //agregar datos al inicio del arreglo
console.table(numeros)

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo']

/* meses.pop() //eliminar el valor final del arreglo
meses.shift() // eliminar el primer valor del arreglo */
/* meses.splice(2, 1)

console.table(meses) */

// Rest operator o Spread operator

const nuevoArreglo = ['Diciembre', ...meses, 'Junio']
console.log(nuevoArreglo)


