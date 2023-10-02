//funcion iniciar Randomizador
const botonRandomizador = document.getElementById("boton-randomizar")
const spanPersonaje = document.getElementById("personaje")
const spanCarreraMilitar = document.getElementById("carrera-militar")
const spanPoderExtra = document.getElementById("poder-extra")
const spanTipoDeArma = document.getElementById("tipo-de-arma")

let personajes = ["Jhon Shepard", "Jane Shepard"]
let carrerasMilitares = ["Soldado", "Infiltrado", "Vanguardia", "Centinela", "Adepto", "Ingeniero"]
let poderesExtra = ["Carnicería", "Tirador", "Mina de proximidad", "Dron de defensa", "Drenaje de energía", "Granada inferno", "Asaltar", "Estasis", "Munición de alteración", "Barrera", "Matriz defensiva", "Fortificación", "Munición perforante", "Estrellar", "Fuerza oscura"]
let tiposDeArmas = ["Rifle Francotirador", "Rifle de Asalto", "Subfusil", "Escopeta"]

function iniciarRandomizador() {
    botonRandomizador.addEventListener("click", seleccionarPersonaje)
}

function seleccionarPersonaje() {
    let personaje = aleatorio(0, personajes.length -1)

    spanPersonaje.innerHTML = personajes[personaje]
    seleccionarCarreraMilitar()
}

function seleccionarCarreraMilitar() {
    let carreraMilitar = aleatorio(0, carrerasMilitares.length -1)

    spanCarreraMilitar.innerHTML = carrerasMilitares[carreraMilitar]
    seleccionarPoderExtra()
}

function seleccionarPoderExtra() {
    let poderExtra = aleatorio(0, poderesExtra.length -1)

    spanPoderExtra.innerHTML = poderesExtra[poderExtra]
    seleccionarTipoDeArma()
} 

function seleccionarTipoDeArma() {
    let tipoDeArma = aleatorio(0, tiposDeArmas.length -1)

    spanTipoDeArma.innerHTML = tiposDeArmas[tipoDeArma]
    seleccionarArmaPrincipal()
}

function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener("load", iniciarRandomizador)