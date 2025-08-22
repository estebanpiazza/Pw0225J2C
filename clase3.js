/* funciones(expresada,declarada,flecha), estructura if, else if operador ternario, and y or , estructura for, metodos de arrays  / ejercicios con prompt sync */

//funcion expresada
console.log(saludar("Sofia"))

function saludar(nombre){
    return "Hola "+ nombre 
}

console.log(saludar("Esteban"))

//funcion declarada

//console.log(sumar(2,2))

let sumar = function (num1,num2){
    return num1 + num2
}
console.log(sumar(1,2))

// funcion flecha

let multiplicar = (num1,num2) => num1*num2

console.log(multiplicar(2,3))  

// estructura if
let a = 1
let b = 2
if ( a < b ){
    console.log("a es menor que b")
}else if ( a === b){
    console.log('a es igual a b')
} else {
    console.log(`${a} es menor que ${b}`)
}

console.log(`la suma de 1 + 1 es: ${1+1}`)

// if ternario (operador ternario)

let resta = a<b ? "es menor":"no es menor"


console.log(resta) 

// estructura for

/*
*for i in range(0,10):
*   print i   
*
*
*/
// for (variable de control; condicion; variación  )
for ( let i = 0; i<10 ; i++ ){
    console.log(i)
}

let nombre = "Esteban"
for ( let i = 0; i< nombre.length; i ++){
    console.log(nombre[i])
}

const ARRAY1 = [1,2,3]
for ( let i = 0; i < ARRAY1.length; i++){
    console.log(ARRAY1[i])
}
const ALUMNOS = [
    {nombre: "pilar", apellido :"gutierrez"},
    {nombre:"Nazareno"},
    {nombre:"Agustin"}
]
for ( let i = 0; i < ALUMNOS.length; i ++){
    console.log(ALUMNOS[i].nombre)
}

// metodos de arrays

