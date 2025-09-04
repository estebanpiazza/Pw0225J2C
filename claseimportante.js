console.log("hola mundo")

let nombreUsuario = document.getElementById("nombreUsuario")

let botonSaludo = document.getElementById("botonSaludo")

let items = document.getElementsByClassName("items")

let ols = document.getElementsByTagName("ol")


let botonDeSaluda = document.querySelector("#botonSaludo")

let itemsQuery = document.querySelectorAll(".items")

console.log(itemsQuery)

let botonCliqueame = document.getElementById("botonCliequeame")


/******************/

console.log(items)
console.log(botonSaludo)

function saludar(){
    alert("Hola humano")
}

botonSaludo.addEventListener("click",saludar)

botonSaludo.addEventListener("mouseover",function(){
    alert("volve")
})

/* nombreUsuario.addEventListener("change", function(){
    alert("escribiste una letra")
}) */

botonCliqueame.addEventListener("click",function(){
    document.getElementById("nombre").innerText = nombreUsuario.value
})