//funcion iniciar Randomizador
const botonRandomizador = document.getElementById("boton-randomizar")
const spanPersonaje = document.getElementById("personaje")
const spanCarreraMilitar = document.getElementById("carrera-militar")
const spanPoderExtra = document.getElementById("poder-extra")
const spanTipoDeArma = document.getElementById("tipo-de-arma")
const spanArmaPrincipal = document.getElementById("arma-principal")
const spanUpgrade1ArmaPrincipal = document.getElementById("upgrade1-arma-principal")
const spanUpgrade2ArmaPrincipal = document.getElementById("upgrade2-arma-principal")

let tipoDeArma
let mejora1AP
let mejora2AP
let upgradesRestantes
let personajes = ["Jhon Shepard", "Jane Shepard"]
let carrerasMilitares = ["Soldado", "Infiltrado", "Vanguardia", "Centinela", "Adepto", "Ingeniero"]
let poderesExtra = ["Carnicería", "Tirador", "Mina de proximidad", "Dron de defensa", "Drenaje de energía", "Granada inferno", "Asaltar", "Estasis", "Munición de alteración", "Barrera", "Matriz defensiva", "Fortificación", "Munición perforante", "Estrellar", "Fuerza oscura"]
let tiposDeArmas = ["Rifle Francotirador", "Rifle de Asalto", "Subfusil", "Escopeta"]
let armasPrincipales = []
let riflesFrancotiradores = ["Lanzaarpones Kishock", "Valiant de N7", "Black Widow", "Incisor M-29", "Indra M-90", "Jabalina", "Mantis M-92", "Raptor M-13", "Viper M-97", "Widow M-98", "Rifle Krysae"]
let riflesDeAsalto = ["Argus M-55", "Avenger M-8", "Phaeston", "Fusil de Pulso Geth", "Mattock M-96", "Lanzachakrams", "Revenant M-76", "Valkyrie de N7", "Vindicator M-15", "Fusil de Particulas", "Harrier de Cerberus", "Fusil Antisintéticos Adas", "Fusil de Asalto Striker", "N7 Typhoon", "Geth Spitfire"]
let subfusiles = ["Hornet M-25", "Locust M-12", "Shuriken M-4", "Tempest M-9", "Castig. Manada Sangrienta", "Hurricane de N7", "Subfusil de Plasma Geth"]
let escopetas = ["Claymore M-300", "Discípulo", "Eviscerator M-22", "Escopeta de Plasma Geth", "Lanzapicos Graal", "Katana M-23", "Raider AT-12", "Scimitar M-27", "Wraith M-11", "Carabina Reegar", "Escopeta Venom", "N7 Piranha", "Crusader de N7"]
let pistolasPesadas = ["Carnifex M-6", "Paladin M-77", "Phalanx M-5", "Predator M-3", "Scorpion", "Talon M-358", "Pistola de Arcos", "Pistola Executioner", "Eagle de N7"]

let upgradesFrancotiradores = ["Mira Mejorada", "Mod. Perforación", "Cañón Alargado", "Cargador Térmico", "Módulo de Concentración", "Materiales Ultraligeros", "Mira Térmica", "Cañón de Gran Velocidad"]

let upgradesRifleDeAsalto = ["Mira de precisión", "Cañón Alargado", "Mod. Perforación", "Mejora de Cargador", "Estabilizador", "Materiales Ultraligeros", "Mira Térmica", "Cañón de Gran Velocidad", "Omnihoja"]

let upgradesSubfusiles = ["Mira de Subfusil", "Sumidero de Calor", "Cañón Gran Calibre", "Mejora de Cargador", "Materiales Ultraligeros", "Magnificador de Poderes", "Sistema de Retroceso", "Cañón de Gran Velocidad"]

let upgradesEscopetas = ["Cañón Delgado", "Cañón Gran Calibre", "Bayoneta", "Mod. Trituración", "Cargador Térmico", "Materiales Ultraligeros", "Omnihoja", "Cañón de Gran Velocidad"]

let upgradesPistolas = ["Mira para Pistola", "Cañón de Gran Calibre", "Mejora de Cargador", "Mod. Perforación", "Aturdidor Cuerpo a Cuerpo", "Magnificador de Poderes", "Materiales Ultraligeros", "Cañón Pesado", "Sistema de Traumatismo Craneal"]

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
    tipoDeArma = aleatorio(0, tiposDeArmas.length -1)

    spanTipoDeArma.innerHTML = tiposDeArmas[tipoDeArma]
    seleccionarArmaPrincipal()
}

function seleccionarArmaPrincipal() {
    console.log(tipoDeArma)
    console.log(tiposDeArmas[tipoDeArma])
    if (tiposDeArmas[tipoDeArma] === "Rifle Francotirador") {
        for (let index = 0; index < riflesFrancotiradores.length; index++) {
            armasPrincipales.push(riflesFrancotiradores[index]);    
        }
    } 
    else if (tiposDeArmas[tipoDeArma] === "Rifle de Asalto") {
        for (let index = 0; index < riflesDeAsalto.length; index++) {
            armasPrincipales.push(riflesDeAsalto[index]);    
        }
    }
    else if (tiposDeArmas[tipoDeArma] === "Subfusil") {
        for (let index = 0; index < subfusiles.length; index++) {
            armasPrincipales.push(subfusiles[index]);    
        }
    } else {
        for (let index = 0; index < escopetas.length; index++) {
            armasPrincipales.push(escopetas[index]);    
        }
    }

    console.log(armasPrincipales)
    
    let armaPrincipal = aleatorio(0, armasPrincipales.length -1)

    spanArmaPrincipal.innerHTML = armasPrincipales[armaPrincipal]
    seleccionarUpgradesArmaPrincipal()
}

function seleccionarUpgradesArmaPrincipal() {
    if (tiposDeArmas[tipoDeArma] === "Rifle Francotirador") {
        console.log(upgradesFrancotiradores)
        let upgrade1APAleatorio = aleatorio(0, upgradesFrancotiradores.length -1)
        console.log(upgrade1APAleatorio)
        spanUpgrade1ArmaPrincipal.innerHTML = upgradesFrancotiradores[upgrade1APAleatorio]
        mejora1AP = upgradesFrancotiradores[upgrade1APAleatorio]
        upgradesFrancotiradores.splice(upgrade1APAleatorio, 1)
        console.log(upgradesFrancotiradores)
        
        resolverConflictoFrancotirador()
      
        let upgrade2APAleatorio = aleatorio(0, upgradesFrancotiradores.length -1)
        console.log(upgrade2APAleatorio)
        spanUpgrade2ArmaPrincipal.innerHTML = upgradesFrancotiradores[upgrade2APAleatorio]
    }
    else if (tiposDeArmas[tipoDeArma] === "Rifle de Asalto") {
        console.log(upgradesRifleDeAsalto)
        let upgrade1APAleatorio = aleatorio(0, upgradesRifleDeAsalto.length -1)
        console.log(upgrade1APAleatorio)
        spanUpgrade1ArmaPrincipal.innerHTML = upgradesRifleDeAsalto[upgrade1APAleatorio]
        mejora1AP
        upgradesRifleDeAsalto.splice(upgrade1APAleatorio, 1)
        console.log(upgradesRifleDeAsalto)

        resolverConflictoAsalto()

        let upgrade2APAleatorio = aleatorio(0, upgradesRifleDeAsalto.length -1)
        console.log(upgrade2APAleatorio)
        spanUpgrade2ArmaPrincipal.innerHTML = upgradesRifleDeAsalto[upgrade2APAleatorio]
    }
    else if (tiposDeArmas[tipoDeArma] === "Subfusil") {
        console.log(upgradesSubfusiles)
        upgrade1AP = aleatorio(0, upgradesSubfusiles.length -1)
        console.log(upgrade1AP)
        spanUpgrade1ArmaPrincipal.innerHTML = upgradesSubfusiles[upgrade1AP]
        upgradesSubfusiles.splice(upgrade1AP, 1)
        console.log(upgradesSubfusiles)
        upgrade2AP = aleatorio(0, upgradesSubfusiles.length -1)
        console.log(upgrade2AP)
        spanUpgrade2ArmaPrincipal.innerHTML = upgradesSubfusiles[upgrade2AP]
    }
    else {
        console.log(upgradesEscopetas)
        upgrade1AP = aleatorio(0, upgradesEscopetas.length -1)
        console.log(upgrade1AP)
        spanUpgrade1ArmaPrincipal.innerHTML = upgradesEscopetas[upgrade1AP]
        upgradesEscopetas.splice(upgrade1AP, 1)
        console.log(upgradesEscopetas)
        upgrade2AP = aleatorio(0, upgradesEscopetas.length -1)
        console.log(upgrade2AP)
        spanUpgrade2ArmaPrincipal.innerHTML = upgradesEscopetas[upgrade2AP]
    }
    
    //Pendiente resolver conflicto de upgrades de un mismo tipo
}

function resolverConflictoFrancotirador() {
    console.log(mejora1AP)
    if (mejora1AP === "Mira Mejorada") {
        upgradesFrancotiradores.splice(5, 1)
    } 
    else if (mejora1AP === "Cañón Alargado") {
        upgradesFrancotiradores.splice(6, 1)
    }
    else if (mejora1AP === "Módulo de Concentración") {
        upgradesFrancotiradores.splice(4, 1)
    }
    else if (mejora1AP === "Mira Térmica") {
        upgradesFrancotiradores.splice(0, 1)
    } 
    else if (mejora1AP === "Cañón de Gran Velocidad") {
        upgradesFrancotiradores.splice(2, 1)
    }
    else if (mejora1AP === "Materiales Ultraligeros") {
        upgradesFrancotiradores.splice(4, 1)   
    }
    console.log(upgradesFrancotiradores)
}

function resolverConflictoAsalto() {
    console.log(mejora1AP)
    if (mejora1AP === "Mira de precisión") {
        upgradesRifleDeAsalto.splice(5, 1)
    } 
    else if (mejora1AP === "Cañón Alargado") {
        upgradesRifleDeAsalto.splice(6, 1)
    }
    else if (mejora1AP === "Mod. Perforación") {
        upgradesRifleDeAsalto.splice(4, 1)
    }
    else if (mejora1AP === "Mira Térmica") {
        upgradesRifleDeAsalto.splice(0, 1)
    } 
    else if (mejora1AP === "Cañón de Gran Velocidad") {
        upgradesRifleDeAsalto.splice(1, 1)
    }
    else if (mejora1AP === "Materiales Ultraligeros") {
        upgradesRifleDeAsalto.splice(2, 1)   
    }
    console.log(upgradesRifleDeAsalto) 
}

function seleccionarArmaSecundaria() {
    let armaSecundaria = aleatorio(0, pistolasPesadas.length -1)

    spanArmaSecundaria.innerHTML = pistolasPesadas[armaSecundaria]
    seleccionarUpgradesPistola()
}

function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener("load", iniciarRandomizador)