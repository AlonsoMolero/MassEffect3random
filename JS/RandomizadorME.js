//funcion iniciar Randomizador
const botonRandomizador = document.getElementById("boton-randomizar")
const spanPersonaje = document.getElementById("personaje")
const spanCarreraMilitar = document.getElementById("carrera-militar")
const spanPoderExtra = document.getElementById("poder-extra")
const spanTipoDeArma = document.getElementById("tipo-de-arma")
const spanArmaPrincipal = document.getElementById("arma-principal")
const spanUpgrade1ArmaPrincipal = document.getElementById("upgrade1-arma-principal")
const spanUpgrade2ArmaPrincipal = document.getElementById("upgrade2-arma-principal")
const spanArmaSecundaria = document.getElementById("arma-secundaria")
const spanUpgrade1ArmaSecundaria = document.getElementById("upgrade1-arma-secundaria")
const spanUpgrade2ArmaSecundaria = document.getElementById("upgrade2-arma-secundaria")
const  spanArmadura = document.getElementById("armadura")
const spanArmaduraPersonalizada = document.getElementById("elementos-armadura-personalizada")

let tipoDeArma
let mejora1AP
let mejora1AS
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

let armaduras = ["Armadura Personalizada", "Armadura N7", "Armadura Hahne-Kedar", "Armadura Arsenal Armax", "Armadura Consejo de Serrice", "Armadura Fabricación de Kassa", "Armadura Tecnología Ariake", "Armadura Materiales Rosenkov", "Armadura de Cerberus", "Armadura Ajax de Cerberus", "Armadura de Terminus", "Aramdura Inferno", "Armadura Sangre de Dragon", "Armadura de Recoletor", "Armadura Reckoner-Knight", "Armadura Defender de N7"]

let cascos = ["Casco N7", "Máscara de la Muerte", "Visera Kuwashii", "Interfaz de Centinela", "Casco Kestrel", "Casco Condensador", "Visera Arconte", "Visera Umbra", "Capucha de Reconocimiento", "Visor Mnemottécnico", "Visor Delumcore", "Casco Securitel"]

let conjuntoInferior = ["N7", "Hahne-Kedar", "Arsenal Armax", "Consejo de Serrice", "Fabricación Kassa", "Tecnologías Ariake", "Materiales Rosenkov"]


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
        mejora1AP = upgradesRifleDeAsalto[upgrade1APAleatorio]
        upgradesRifleDeAsalto.splice(upgrade1APAleatorio, 1)
        console.log(upgradesRifleDeAsalto)

        resolverConflictoAsalto()

        let upgrade2APAleatorio = aleatorio(0, upgradesRifleDeAsalto.length -1)
        console.log(upgrade2APAleatorio)
        spanUpgrade2ArmaPrincipal.innerHTML = upgradesRifleDeAsalto[upgrade2APAleatorio]
    }
    else if (tiposDeArmas[tipoDeArma] === "Subfusil") {
        console.log(upgradesSubfusiles)
        let upgrade1APAleatorio = aleatorio(0, upgradesSubfusiles.length -1)
        console.log(upgrade1APAleatorio)
        spanUpgrade1ArmaPrincipal.innerHTML = upgradesSubfusiles[upgrade1APAleatorio]
        mejora1AP = upgradesSubfusiles[upgrade1APAleatorio]
        upgradesSubfusiles.splice(upgrade1APAleatorio, 1)
        console.log(upgradesSubfusiles)

        resolverConflictoSubfusil()

        let upgrade2APAleatorio = aleatorio(0, upgradesSubfusiles.length -1)
        console.log(upgrade2APAleatorio)
        spanUpgrade2ArmaPrincipal.innerHTML = upgradesSubfusiles[upgrade2APAleatorio]
    }
    else {
        console.log(upgradesEscopetas)
        let upgrade1APAleatorio = aleatorio(0, upgradesEscopetas.length -1)
        console.log(upgrade1APAleatorio)
        spanUpgrade1ArmaPrincipal.innerHTML = upgradesEscopetas[upgrade1APAleatorio]
        mejora1AP = upgradesEscopetas[upgrade1APAleatorio]
        upgradesEscopetas.splice(upgrade1APAleatorio, 1)
        console.log(upgradesEscopetas)

        resolverConflictoEscopeta()

        let upgrade2APAleatorio = aleatorio(0, upgradesEscopetas.length -1)
        console.log(upgrade2APAleatorio)
        spanUpgrade2ArmaPrincipal.innerHTML = upgradesEscopetas[upgrade2APAleatorio]
    }
    seleccionarArmaSecundaria()
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

function resolverConflictoSubfusil() {
    console.log(mejora1AP)
    if (mejora1AP === "Mira de Subfusil") {
        upgradesSubfusiles.splice(4, 1)
    } 
    else if (mejora1AP === "Cañón Gran Calibre") {
        upgradesSubfusiles.splice(6, 1)
    }
    else if (mejora1AP === "Materiales Ultraligeros") {
        upgradesSubfusiles.splice(5, 1)
    }
    else if (mejora1AP === "Magnificador de Poderes") {
        upgradesSubfusiles.splice(0, 1)
    } 
    else if (mejora1AP === "Cañón de Gran Velocidad") {
        upgradesSubfusiles.splice(2, 1)
    }
    else if (mejora1AP === "Sistema de Retroceso") {
        upgradesSubfusiles.splice(4, 1)   
    }
    console.log(upgradesSubfusiles) 
}

function resolverConflictoEscopeta() {
    console.log(mejora1AP)
    if (mejora1AP === "Cañón Delgado") {
        upgradesEscopetas.splice(4, 1)
    } 
    else if (mejora1AP === "Cañón Gran Calibre") {
        upgradesEscopetas.splice(6, 1)
    }
    else if (mejora1AP === "Bayoneta") {
        upgradesEscopetas.splice(5, 1)
    }
    else if (mejora1AP === "Materiales Ultraligeros") {
        upgradesEscopetas.splice(0, 1)
    } 
    else if (mejora1AP === "Cañón de Gran Velocidad") {
        upgradesEscopetas.splice(1, 1)
    }
    else if (mejora1AP === "Omnihoja") {
        upgradesEscopetas.splice(2, 1)   
    }
    console.log(upgradesEscopetas) 
}

function seleccionarArmaSecundaria() {
    let armaSecundariaAleatorio = aleatorio(0, pistolasPesadas.length -1)

    spanArmaSecundaria.innerHTML = pistolasPesadas[armaSecundariaAleatorio]
    seleccionarUpgradesPistola()
}

function seleccionarUpgradesPistola() {
    console.log(upgradesPistolas)
    let upgrade1ASAleatorio = aleatorio(0, upgradesPistolas.length -1)
    console.log(upgrade1ASAleatorio)
    spanUpgrade1ArmaSecundaria.innerHTML = upgradesPistolas[upgrade1ASAleatorio]
    mejora1AS = upgradesPistolas[upgrade1ASAleatorio]
    upgradesPistolas.splice(upgrade1ASAleatorio, 1)
    console.log(upgradesPistolas)
    
    resolverConflictoPistola()
    
    let upgrade2ASAleatorio = aleatorio(0, upgradesPistolas.length -1)
    console.log(upgrade2ASAleatorio)
    spanUpgrade2ArmaSecundaria.innerHTML = upgradesPistolas[upgrade2ASAleatorio]
}

function resolverConflictoPistola() {
    console.log(mejora1AS)
    if (mejora1AS === "Mira para Pistola") {
        upgradesPistolas.splice(4, 1)
    } 
    else if (mejora1AS === "Cañón de Gran Calibre") {
        upgradesPistolas.splice(6, 2)
    }
    else if (mejora1AS === "Mejora de Cargador") {
        upgradesPistolas.splice(5, 1)
    }
    else if (mejora1AS === "Materiales Ultraligeros") {
        upgradesPistolas.splice(2, 1)
    } 
    else if (mejora1AS === "Cañón Pesado") {
        upgradesPistolas.splice(7, 1)
        upgradesPistolas.splice(1, 1)
    }
    else if (mejora1AS === "Sistema de Traumatismo Craneal") {
        upgradesPistolas.splice(7, 1)
        upgradesPistolas.splice(1, 1)   
    }
    console.log(upgradesPistolas)
    seleccionarArmadura() 
}

function seleccionarArmadura() {
    let armaduraAleatorio = aleatorio(0, armaduras.length -1)

    spanArmadura.innerHTML = armaduras[armaduraAleatorio]
    
    if (armaduras[armaduraAleatorio] === "Armadura Personalizada") {
        armaduraPersonalizada()
    }
}

function armaduraPersonalizada() {
    let casco = aleatorio(0, cascos.length -1)
    let pecho = aleatorio(0, conjuntoInferior.length -1)
    let hombro = aleatorio(0, conjuntoInferior.length -1)
    let brazo = aleatorio(0, conjuntoInferior.length -1)
    let pierna = aleatorio(0, conjuntoInferior.length -1)

    let elementoCasco = document.createElement("p")
    let elementoPecho = document.createElement("p")
    let elementoHombro = document.createElement("p")
    let elementoBrazo = document.createElement("p")
    let elementoPierna = document.createElement("p")

    elementoCasco.innerHTML = "Casco: " + cascos[casco]
    elementoPecho.innerHTML = "Pecho: " + conjuntoInferior[pecho]
    elementoHombro.innerHTML = "Hombros: " + conjuntoInferior[hombro]
    elementoBrazo.innerHTML = "Brazos: " + conjuntoInferior[brazo]
    elementoPierna.innerHTML = "Pierna: " + conjuntoInferior[pierna]

    spanArmaduraPersonalizada.appendChild(elementoCasco)
    spanArmaduraPersonalizada.appendChild(elementoPecho)
    spanArmaduraPersonalizada.appendChild(elementoHombro)
    spanArmaduraPersonalizada.appendChild(elementoBrazo)
    spanArmaduraPersonalizada.appendChild(elementoPierna)

}

function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener("load", iniciarRandomizador)