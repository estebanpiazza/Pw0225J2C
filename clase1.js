let nombre = "Esteban";
let edad = 32;
let profesor = true;
edad = edad + 1
edad += 1

const PI = 3.14
//PI += 1
//console.log(PI) //print

// edad_de_persona
// edadDePersona

const ARRAY1 = []
ARRAY1.push("a")
console.log(ARRAY1[0])
// ``

console.log(ARRAY1[1])

//***************************************/

//Objetos Literales ( Diccionario )
let alumno1 = {
                    nombre: "Agustin", 
    apellido: "Vaserman",
                                            edad: 22,
deuda: false,
}
let alumno2= {
                        nombre: "Sofia", 
    apellido: "Quintero",
                                            edad: 21,
deuda: false,
}
let alumno3= {
                        nombre: "Paulina", 
    apellido: "Losinno",
                                            edad: 21,
deuda: false,
}
const CLASE = [alumno1,alumno2,alumno3]
console.log(alumno1)
console.log(alumno1.nombre)

console.log(CLASE)
console.log(CLASE[2].apellido)
console.table(CLASE)

/*
Javascript: variables, tipos de datos (variable, constante, array, objeto), array de objetos, operadores logicos(&& ||), aritmeticos(<>) y matematicos(+-* / ), parseo de datos,thurty y flasy
*/

console.log(1+1)
console.log("1"+1)
console.log("2"-1)
console.log("Esteban"+1)
console.log("Esteban"-1)
console.log("2"*3)
console.log(0.6+0.1)
console.log(0.7+0.1)


/****************** */

//Operadores matematicos
1+1
2-1
3*2
3/3
3%3

//Operadores aritmeticos
1>1 //false
1>= 1 // true
2<3 // verdaderp
3<= 2 //false
2 == 2 //true
2 != 2 // false
console.log("2" == 2 )
console.log("2" === 2)
console.log("2" != 2)
console.log("2" !== 2)
console.log(typeof("hola"))
console.log(typeof("2") == typeof(2))
console.log("3"-1)

// AND
console.log("perro" && "gato")
//OR
console.log("perro" || "gato")

// Parser CASTEAR
// "2" > int("2")

console.log(Number("2"))
let numeroEntero =  2
console.log( numeroEntero = String(numeroEntero) )
console.log(typeof(numeroEntero))

