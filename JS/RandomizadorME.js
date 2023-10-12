//funcion iniciar Randomizador
const botonRandomizador = document.getElementById("boton-randomizar")
const botonReiniciar = document.getElementById("boton-reiniciar")
botonReiniciar.style.display = "none"
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

const spanCompañero1 = document.getElementById("compañero-1")
const spanCompañero2 = document.getElementById("compañero-2")
const spanTituloCompañero1 = document.getElementById("titulo-compañero-1")
const spanTituloCompañero2 = document.getElementById("titulo-compañero-2")
const spanArmaPrincipalC1 = document.getElementById("arma-principal-compañero-1")
const spanUpgrade1ArmaPrincipalC1 = document.getElementById("upgrade1-arma-principal-compañero-1")
const spanUpgrade2ArmaPrincipalC1 = document.getElementById("upgrade2-arma-principal-compañero-1")
const spanArmaSecundariaC1 = document.getElementById("arma-secundaria-compañero-1")
const spanUpgrade1ArmaSecundariaC1 = document.getElementById("upgrade1-arma-secundaria-compañero-1")
const spanUpgrade2ArmaSecundariaC1 = document.getElementById("upgrade2-arma-secundaria-compañero-1")

const spanArmaPrincipalC2 = document.getElementById("arma-principal-compañero-2")
const spanUpgrade1ArmaPrincipalC2 = document.getElementById("upgrade1-arma-principal-compañero-2")
const spanUpgrade2ArmaPrincipalC2 = document.getElementById("upgrade2-arma-principal-compañero-2")
const spanArmaSecundariaC2 = document.getElementById("arma-secundaria-compañero-2")
const spanUpgrade1ArmaSecundariaC2 = document.getElementById("upgrade1-arma-secundaria-compañero-2")
const spanUpgrade2ArmaSecundariaC2 = document.getElementById("upgrade2-arma-secundaria-compañero-2")


let tipoDeArma
let mejora1AP
let mejora1AS
let compañero1Seleccionado
let compañero2Seleccionado
let personajes = ["Male Shepard", "Female Shepard"]
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

let upgradesFrancotiradoresC1 = ["Mira Mejorada", "Mod. Perforación", "Cañón Alargado", "Cargador Térmico", "Módulo de Concentración", "Materiales Ultraligeros", "Mira Térmica", "Cañón de Gran Velocidad"]

let upgradesFrancotiradoresC2 = ["Mira Mejorada", "Mod. Perforación", "Cañón Alargado", "Cargador Térmico", "Módulo de Concentración", "Materiales Ultraligeros", "Mira Térmica", "Cañón de Gran Velocidad"]

let upgradesRifleDeAsalto = ["Mira de precisión", "Cañón Alargado", "Mod. Perforación", "Mejora de Cargador", "Estabilizador", "Materiales Ultraligeros", "Mira Térmica", "Cañón de Gran Velocidad", "Omnihoja"]

let upgradesRifleDeAsaltoC1 = ["Mira de precisión", "Cañón Alargado", "Mod. Perforación", "Mejora de Cargador", "Estabilizador", "Materiales Ultraligeros", "Mira Térmica", "Cañón de Gran Velocidad", "Omnihoja"]

let upgradesRifleDeAsaltoC2 = ["Mira de precisión", "Cañón Alargado", "Mod. Perforación", "Mejora de Cargador", "Estabilizador", "Materiales Ultraligeros", "Mira Térmica", "Cañón de Gran Velocidad", "Omnihoja"]

let upgradesSubfusiles = ["Mira de Subfusil", "Sumidero de Calor", "Cañón Gran Calibre", "Mejora de Cargador", "Materiales Ultraligeros", "Magnificador de Poderes", "Sistema de Retroceso", "Cañón de Gran Velocidad"]

let upgradesSubfusilesC1 = ["Mira de Subfusil", "Sumidero de Calor", "Cañón Gran Calibre", "Mejora de Cargador", "Materiales Ultraligeros", "Magnificador de Poderes", "Sistema de Retroceso", "Cañón de Gran Velocidad"]

let upgradesSubfusilesC2 = ["Mira de Subfusil", "Sumidero de Calor", "Cañón Gran Calibre", "Mejora de Cargador", "Materiales Ultraligeros", "Magnificador de Poderes", "Sistema de Retroceso", "Cañón de Gran Velocidad"]

let upgradesEscopetas = ["Cañón Delgado", "Cañón Gran Calibre", "Bayoneta", "Mod. Trituración", "Cargador Térmico", "Materiales Ultraligeros", "Omnihoja", "Cañón de Gran Velocidad"]

let upgradesEscopetasC1 = ["Cañón Delgado", "Cañón Gran Calibre", "Bayoneta", "Mod. Trituración", "Cargador Térmico", "Materiales Ultraligeros", "Omnihoja", "Cañón de Gran Velocidad"]

let upgradesEscopetasC2 = ["Cañón Delgado", "Cañón Gran Calibre", "Bayoneta", "Mod. Trituración", "Cargador Térmico", "Materiales Ultraligeros", "Omnihoja", "Cañón de Gran Velocidad"]

let upgradesPistolas = ["Mira para Pistola", "Cañón de Gran Calibre", "Mejora de Cargador", "Mod. Perforación", "Aturdidor Cuerpo a Cuerpo", "Magnificador de Poderes", "Materiales Ultraligeros", "Cañón Pesado", "Sistema de Traumatismo Craneal"]

let upgradesPistolasC1 = ["Mira para Pistola", "Cañón de Gran Calibre", "Mejora de Cargador", "Mod. Perforación", "Aturdidor Cuerpo a Cuerpo", "Magnificador de Poderes", "Materiales Ultraligeros", "Cañón Pesado", "Sistema de Traumatismo Craneal"]

let upgradesPistolasC2 = ["Mira para Pistola", "Cañón de Gran Calibre", "Mejora de Cargador", "Mod. Perforación", "Aturdidor Cuerpo a Cuerpo", "Magnificador de Poderes", "Materiales Ultraligeros", "Cañón Pesado", "Sistema de Traumatismo Craneal"]

let armaduras = ["Armadura Personalizada", "Armadura N7", "Armadura Hahne-Kedar", "Armadura Arsenal Armax", "Armadura Consejo de Serrice", "Armadura Fabricación de Kassa", "Armadura Tecnología Ariake", "Armadura Materiales Rosenkov", "Armadura de Cerberus", "Armadura Ajax de Cerberus", "Armadura de Terminus", "Armadura Inferno", "Armadura Sangre de Dragon", "Armadura de Recoletor", "Armadura Reckoner-Knight", "Armadura Defender de N7"]

let cascos = ["Casco N7", "Máscara de la Muerte", "Visera Kuwashii", "Interfaz de Centinela", "Casco Kestrel", "Casco Condensador", "Visera Arconte", "Visera Umbra", "Capucha de Reconocimiento", "Visor Mnemottécnico", "Visor Delumcore", "Casco Securitel"]

let conjuntoInferior = ["N7", "Hahne-Kedar", "Arsenal Armax", "Consejo de Serrice", "Fabricación Kassa", "Tecnologías Ariake", "Materiales Rosenkov"]

let peloton = ["Liara T'Soni", "James Vega", "Javik", "Garrus Vakarian", "SID", "Kaidan Alenko", "Ashley Williams", "Tali'Zorah"]

let pelotonInicial = ["Liara T'Soni", "James Vega", "Javik", "Garrus Vakarian", "SID"]


function iniciarRandomizador() {
    botonRandomizador.addEventListener("click", seleccionarPersonaje)
}

function seleccionarPersonaje() {
    botonRandomizador.disabled = true
    botonRandomizador.style.display = "none"
    botonReiniciar.style.display = "block"
    botonReiniciar.addEventListener("click", reiniciar)

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
    
    let armaPrincipal = aleatorio(0, armasPrincipales.length -1)

    spanArmaPrincipal.innerHTML = armasPrincipales[armaPrincipal]
    seleccionarUpgradesArmaPrincipal()
}

function seleccionarUpgradesArmaPrincipal() {
    if (tiposDeArmas[tipoDeArma] === "Rifle Francotirador") {
        let upgrade1APAleatorio = aleatorio(0, upgradesFrancotiradores.length -1)
        spanUpgrade1ArmaPrincipal.innerHTML = upgradesFrancotiradores[upgrade1APAleatorio]
        mejora1AP = upgradesFrancotiradores[upgrade1APAleatorio]
        upgradesFrancotiradores.splice(upgrade1APAleatorio, 1)
        
        resolverConflictoFrancotirador()
      
        let upgrade2APAleatorio = aleatorio(0, upgradesFrancotiradores.length -1)
        spanUpgrade2ArmaPrincipal.innerHTML = upgradesFrancotiradores[upgrade2APAleatorio]
    }
    else if (tiposDeArmas[tipoDeArma] === "Rifle de Asalto") {
        let upgrade1APAleatorio = aleatorio(0, upgradesRifleDeAsalto.length -1)
        spanUpgrade1ArmaPrincipal.innerHTML = upgradesRifleDeAsalto[upgrade1APAleatorio]
        mejora1AP = upgradesRifleDeAsalto[upgrade1APAleatorio]
        upgradesRifleDeAsalto.splice(upgrade1APAleatorio, 1)

        resolverConflictoAsalto()

        let upgrade2APAleatorio = aleatorio(0, upgradesRifleDeAsalto.length -1)
        spanUpgrade2ArmaPrincipal.innerHTML = upgradesRifleDeAsalto[upgrade2APAleatorio]
    }
    else if (tiposDeArmas[tipoDeArma] === "Subfusil") {
        let upgrade1APAleatorio = aleatorio(0, upgradesSubfusiles.length -1)
        spanUpgrade1ArmaPrincipal.innerHTML = upgradesSubfusiles[upgrade1APAleatorio]
        mejora1AP = upgradesSubfusiles[upgrade1APAleatorio]
        upgradesSubfusiles.splice(upgrade1APAleatorio, 1)

        resolverConflictoSubfusil()

        let upgrade2APAleatorio = aleatorio(0, upgradesSubfusiles.length -1)
        spanUpgrade2ArmaPrincipal.innerHTML = upgradesSubfusiles[upgrade2APAleatorio]
    }
    else {
        let upgrade1APAleatorio = aleatorio(0, upgradesEscopetas.length -1)
        spanUpgrade1ArmaPrincipal.innerHTML = upgradesEscopetas[upgrade1APAleatorio]
        mejora1AP = upgradesEscopetas[upgrade1APAleatorio]
        upgradesEscopetas.splice(upgrade1APAleatorio, 1)

        resolverConflictoEscopeta()

        let upgrade2APAleatorio = aleatorio(0, upgradesEscopetas.length -1)
        spanUpgrade2ArmaPrincipal.innerHTML = upgradesEscopetas[upgrade2APAleatorio]
    }
    seleccionarArmaSecundaria()
}

function resolverConflictoFrancotirador() {
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
}

function resolverConflictoAsalto() {
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
}

function resolverConflictoSubfusil() {
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
}

function resolverConflictoEscopeta() {
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
}

function seleccionarArmaSecundaria() {
    let armaSecundariaAleatorio = aleatorio(0, pistolasPesadas.length -1)

    spanArmaSecundaria.innerHTML = pistolasPesadas[armaSecundariaAleatorio]
    seleccionarUpgradesPistola()
}

function seleccionarUpgradesPistola() {
    let upgrade1ASAleatorio = aleatorio(0, upgradesPistolas.length -1)
    spanUpgrade1ArmaSecundaria.innerHTML = upgradesPistolas[upgrade1ASAleatorio]
    mejora1AS = upgradesPistolas[upgrade1ASAleatorio]
    upgradesPistolas.splice(upgrade1ASAleatorio, 1)
    
    resolverConflictoPistola()
    
    let upgrade2ASAleatorio = aleatorio(0, upgradesPistolas.length -1)
    spanUpgrade2ArmaSecundaria.innerHTML = upgradesPistolas[upgrade2ASAleatorio]
}

function resolverConflictoPistola() {
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
    seleccionarArmadura() 
}

function seleccionarArmadura() {
    let armaduraAleatorio = aleatorio(0, armaduras.length -1)

    spanArmadura.innerHTML = armaduras[armaduraAleatorio]
    
    if (armaduras[armaduraAleatorio] === "Armadura Personalizada") {
        armaduraPersonalizada()
    }
    seleccionarPeloton()
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

    elementoCasco.innerHTML = `<span id="titulo-elemento-armadura">Casco: </span>${cascos[casco]}`
    elementoPecho.innerHTML =  `<span id="titulo-elemento-armadura">Pecho: </span>${conjuntoInferior[pecho]}`
    elementoHombro.innerHTML = `<span id="titulo-elemento-armadura">Hombros: </span>${conjuntoInferior[hombro]}`
    elementoBrazo.innerHTML = `<span id="titulo-elemento-armadura">Brazos: </span>${conjuntoInferior[brazo]}`
    elementoPierna.innerHTML = `<span id="titulo-elemento-armadura">Piernas: </span>${conjuntoInferior[pierna]}`

    spanArmaduraPersonalizada.appendChild(elementoCasco)
    spanArmaduraPersonalizada.appendChild(elementoPecho)
    spanArmaduraPersonalizada.appendChild(elementoHombro)
    spanArmaduraPersonalizada.appendChild(elementoBrazo)
    spanArmaduraPersonalizada.appendChild(elementoPierna)

}

function seleccionarPeloton() {   
    let compañero1 = aleatorio(0, peloton.length -1)
    spanCompañero1.innerHTML = peloton[compañero1]
    compañero1Seleccionado = peloton[compañero1]
    spanTituloCompañero1.innerHTML = compañero1Seleccionado

    if (peloton[compañero1] === "Kaidan Alenko" || peloton[compañero1] === "Ashley Williams") {
        let compañero1Inicial = aleatorio(0, pelotonInicial.length -1)
        spanCompañero1.innerHTML = peloton[compañero1] + " " + "(Utiliza a " + pelotonInicial[compañero1Inicial] + " hasta conseguir a " + peloton[compañero1] + ")"
        
        peloton.splice(5, 2)
        peloton.splice(compañero1Inicial, 1) 
        pelotonInicial.splice(compañero1Inicial, 1)
    }
    else if (peloton[compañero1] === "Tali'Zorah") {
        let compañero1Inicial = aleatorio(0, pelotonInicial.length -1)
        spanCompañero1.innerHTML = peloton[compañero1] + " " + "(Utiliza a " + pelotonInicial[compañero1Inicial] + " hasta conseguir a " + peloton[compañero1] + ")"
        
        peloton.splice(compañero1, 1)
        peloton.splice(compañero1Inicial, 1) 
        pelotonInicial.splice(compañero1Inicial, 1)
    }
    else {
        peloton.splice(compañero1, 1)
        pelotonInicial.splice(compañero1, 1)
    }

    let compañero2 = aleatorio(0, peloton.length -1)
    spanCompañero2.innerHTML = peloton[compañero2]
    compañero2Seleccionado = peloton[compañero2]
    spanTituloCompañero2.innerHTML = compañero2Seleccionado

    if (peloton[compañero2] === "Kaidan Alenko" || peloton[compañero2] === "Ashley Williams" || peloton[compañero2] === "Tali'Zorah") {
        let compañero2Inicial = aleatorio(0, pelotonInicial.length -1)
        spanCompañero2.innerHTML = peloton[compañero2] + " " + "(Utiliza a " + pelotonInicial[compañero2Inicial] + " hasta conseguir a " + peloton[compañero2] + ")"
    }
    
    seleccionArmamentoC1()
}

function seleccionArmamentoC1() {
    if (compañero1Seleccionado === "Javik" || compañero1Seleccionado === "Kaidan Alenko") {
        let indiceArmaPrincipalC1 = aleatorio(0, riflesDeAsalto.length -1)
        spanArmaPrincipalC1.innerHTML = riflesDeAsalto[indiceArmaPrincipalC1]

        let indiceUpgrade1ArmaPrincipalC1 = aleatorio(0, upgradesRifleDeAsaltoC1.length -1)
        spanUpgrade1ArmaPrincipalC1.innerHTML = upgradesRifleDeAsaltoC1[indiceUpgrade1ArmaPrincipalC1]
        mejora1APC1 = upgradesRifleDeAsaltoC1[indiceUpgrade1ArmaPrincipalC1]
        upgradesRifleDeAsaltoC1.splice(indiceUpgrade1ArmaPrincipalC1, 1)

        resolverConflictoAsaltoC1()

        let indiceUpgrade2ArmaPrincipalC1 = aleatorio(0, upgradesRifleDeAsaltoC1.length -1)
        spanUpgrade2ArmaPrincipalC1.innerHTML = upgradesRifleDeAsaltoC1[indiceUpgrade2ArmaPrincipalC1]
        
        //Arma Secundaria Javik/Kaidan
        
        let indiceArmaSecundariaC1 = aleatorio(0, pistolasPesadas.length -1)
        spanArmaSecundariaC1.innerHTML = pistolasPesadas[indiceArmaSecundariaC1]

        let indiceUpgrade1ArmaSecundariaC1 = aleatorio(0, upgradesPistolasC1.length -1)
        spanUpgrade1ArmaSecundariaC1.innerHTML = upgradesPistolasC1[indiceUpgrade1ArmaSecundariaC1]
        mejora1ASC1 = upgradesPistolasC1[indiceUpgrade1ArmaSecundariaC1]
        upgradesPistolasC1.splice(indiceUpgrade1ArmaSecundariaC1, 1)

        resolverConflictoPistolaC1()

        let indiceUpgrade2ArmaSecundariaC1 = aleatorio(0, upgradesPistolasC1.length -1)
        spanUpgrade2ArmaSecundariaC1.innerHTML = upgradesPistolasC1[indiceUpgrade2ArmaSecundariaC1]
    }
    else if (compañero1Seleccionado === "Liara T'Soni" || compañero1Seleccionado === "SID") {
        let indiceArmaPrincipalC1 = aleatorio(0, subfusiles.length -1)
        spanArmaPrincipalC1.innerHTML = subfusiles[indiceArmaPrincipalC1]

        let indiceUpgrade1ArmaPrincipalC1 = aleatorio(0, upgradesSubfusilesC1.length -1)
        spanUpgrade1ArmaPrincipalC1.innerHTML = upgradesSubfusilesC1[indiceUpgrade1ArmaPrincipalC1]
        mejora1APC1 = upgradesSubfusilesC1[indiceUpgrade1ArmaPrincipalC1]
        upgradesSubfusilesC1.splice(indiceUpgrade1ArmaPrincipalC1, 1)

        resolverConflictoSubfusilC1()

        let indiceUpgrade2ArmaPrincipalC1 = aleatorio(0, upgradesSubfusilesC1.length -1)
        spanUpgrade2ArmaPrincipalC1.innerHTML = upgradesSubfusilesC1[indiceUpgrade2ArmaPrincipalC1]
        
        //Arma Secundaria Liara/SID
        
        let indiceArmaSecundariaC1 = aleatorio(0, pistolasPesadas.length -1)
        spanArmaSecundariaC1.innerHTML = pistolasPesadas[indiceArmaSecundariaC1]

        let indiceUpgrade1ArmaSecundariaC1 = aleatorio(0, upgradesPistolasC1.length -1)
        spanUpgrade1ArmaSecundariaC1.innerHTML = upgradesPistolasC1[indiceUpgrade1ArmaSecundariaC1]
        mejora1ASC1 = upgradesPistolasC1[indiceUpgrade1ArmaSecundariaC1]
        upgradesPistolasC1.splice(indiceUpgrade1ArmaSecundariaC1, 1)

        resolverConflictoPistolaC1()

        let indiceUpgrade2ArmaSecundariaC1 = aleatorio(0, upgradesPistolasC1.length -1)
        spanUpgrade2ArmaSecundariaC1.innerHTML = upgradesPistolasC1[indiceUpgrade2ArmaSecundariaC1]
    }
    else if (compañero1Seleccionado === "Garrus Vakarian" || compañero1Seleccionado === "Ashley Williams") {
        let indiceArmaPrincipalC1 = aleatorio(0, riflesDeAsalto.length -1)
        spanArmaPrincipalC1.innerHTML = riflesDeAsalto[indiceArmaPrincipalC1]

        let indiceUpgrade1ArmaPrincipalC1 = aleatorio(0, upgradesRifleDeAsaltoC1.length -1)
        spanUpgrade1ArmaPrincipalC1.innerHTML = upgradesRifleDeAsaltoC1[indiceUpgrade1ArmaPrincipalC1]
        mejora1APC1 = upgradesRifleDeAsaltoC1[indiceUpgrade1ArmaPrincipalC1]
        upgradesRifleDeAsaltoC1.splice(indiceUpgrade1ArmaPrincipalC1, 1)

        resolverConflictoAsaltoC1()

        let indiceUpgrade2ArmaPrincipalC1 = aleatorio(0, upgradesRifleDeAsaltoC1.length -1)
        spanUpgrade2ArmaPrincipalC1.innerHTML = upgradesRifleDeAsaltoC1[indiceUpgrade2ArmaPrincipalC1]
        
        //Arma Secundaria Garrus/Ashley
        
        let indiceArmaSecundariaC1 = aleatorio(0, riflesFrancotiradores.length -1)
        spanArmaSecundariaC1.innerHTML = riflesFrancotiradores[indiceArmaSecundariaC1]

        let indiceUpgrade1ArmaSecundariaC1 = aleatorio(0, upgradesFrancotiradoresC1.length -1)
        spanUpgrade1ArmaSecundariaC1.innerHTML = upgradesFrancotiradoresC1[indiceUpgrade1ArmaSecundariaC1]
        mejora1ASC1 = upgradesFrancotiradoresC1[indiceUpgrade1ArmaSecundariaC1]
        upgradesFrancotiradoresC1.splice(indiceUpgrade1ArmaSecundariaC1, 1)

        resolverConflictoFrancotiradorC1()

        let indiceUpgrade2ArmaSecundariaC1 = aleatorio(0, upgradesFrancotiradoresC1.length -1)
        spanUpgrade2ArmaSecundariaC1.innerHTML = upgradesFrancotiradoresC1[indiceUpgrade2ArmaSecundariaC1]
    }
    else if (compañero1Seleccionado === "James Vega") {
        let indiceArmaPrincipalC1 = aleatorio(0, riflesDeAsalto.length -1)
        spanArmaPrincipalC1.innerHTML = riflesDeAsalto[indiceArmaPrincipalC1]

        let indiceUpgrade1ArmaPrincipalC1 = aleatorio(0, upgradesRifleDeAsaltoC1.length -1)
        spanUpgrade1ArmaPrincipalC1.innerHTML = upgradesRifleDeAsaltoC1[indiceUpgrade1ArmaPrincipalC1]
        mejora1APC1 = upgradesRifleDeAsaltoC1[indiceUpgrade1ArmaPrincipalC1]
        upgradesRifleDeAsaltoC1.splice(indiceUpgrade1ArmaPrincipalC1, 1)

        resolverConflictoAsaltoC1()

        let indiceUpgrade2ArmaPrincipalC1 = aleatorio(0, upgradesRifleDeAsaltoC1.length -1)
        spanUpgrade2ArmaPrincipalC1.innerHTML = upgradesRifleDeAsaltoC1[indiceUpgrade2ArmaPrincipalC1]
        
        //Arma Secundaria James
        
        let indiceArmaSecundariaC1 = aleatorio(0, escopetas.length -1)
        spanArmaSecundariaC1.innerHTML = escopetas[indiceArmaSecundariaC1]

        let indiceUpgrade1ArmaSecundariaC1 = aleatorio(0, upgradesEscopetasC1.length -1)
        spanUpgrade1ArmaSecundariaC1.innerHTML = upgradesEscopetasC1[indiceUpgrade1ArmaSecundariaC1]
        mejora1ASC1 = upgradesEscopetasC1[indiceUpgrade1ArmaSecundariaC1]
        upgradesEscopetasC1.splice(indiceUpgrade1ArmaSecundariaC1, 1)

        resolverConflictoEscopetaC1()

        let indiceUpgrade2ArmaSecundariaC1 = aleatorio(0, upgradesEscopetasC1.length -1)
        spanUpgrade2ArmaSecundariaC1.innerHTML = upgradesEscopetasC1[indiceUpgrade2ArmaSecundariaC1]
    }
    else if (compañero1Seleccionado === "Tali'Zorah") {
        let indiceArmaPrincipalC1 = aleatorio(0, escopetas.length -1)
        spanArmaPrincipalC1.innerHTML = escopetas[indiceArmaPrincipalC1]

        let indiceUpgrade1ArmaPrincipalC1 = aleatorio(0, upgradesEscopetasC1.length -1)
        spanUpgrade1ArmaPrincipalC1.innerHTML = upgradesEscopetasC1[indiceUpgrade1ArmaPrincipalC1]
        mejora1APC1 = upgradesEscopetasC1[indiceUpgrade1ArmaPrincipalC1]
        upgradesEscopetasC1.splice(indiceUpgrade1ArmaPrincipalC1, 1)

        resolverConflictoEscopetaC1()

        let indiceUpgrade2ArmaPrincipalC1 = aleatorio(0, upgradesEscopetasC1.length -1)
        spanUpgrade2ArmaPrincipalC1.innerHTML = upgradesEscopetasC1[indiceUpgrade2ArmaPrincipalC1]
        
        //Arma Secundaria Tali
        
        let indiceArmaSecundariaC1 = aleatorio(0, pistolasPesadas.length -1)
        spanArmaSecundariaC1.innerHTML = pistolasPesadas[indiceArmaSecundariaC1]

        let indiceUpgrade1ArmaSecundariaC1 = aleatorio(0, upgradesPistolasC1.length -1)
        spanUpgrade1ArmaSecundariaC1.innerHTML = upgradesPistolasC1[indiceUpgrade1ArmaSecundariaC1]
        mejora1ASC1 = upgradesPistolasC1[indiceUpgrade1ArmaSecundariaC1]
        upgradesPistolasC1.splice(indiceUpgrade1ArmaSecundariaC1, 1)

        resolverConflictoPistolaC1()

        let indiceUpgrade2ArmaSecundariaC1 = aleatorio(0, upgradesPistolasC1.length -1)
        spanUpgrade2ArmaSecundariaC1.innerHTML = upgradesPistolasC1[indiceUpgrade2ArmaSecundariaC1]
    }
    seleccionArmamentoC2()
}

function seleccionArmamentoC2() {
    if (compañero2Seleccionado === "Javik" || compañero2Seleccionado === "Kaidan Alenko") {
        let indiceArmaPrincipalC2 = aleatorio(0, riflesDeAsalto.length -1)
        spanArmaPrincipalC2.innerHTML = riflesDeAsalto[indiceArmaPrincipalC2]

        let indiceUpgrade1ArmaPrincipalC2 = aleatorio(0, upgradesRifleDeAsaltoC2.length -1)
        spanUpgrade1ArmaPrincipalC2.innerHTML = upgradesRifleDeAsaltoC2[indiceUpgrade1ArmaPrincipalC2]
        mejora1APC2 = upgradesRifleDeAsaltoC2[indiceUpgrade1ArmaPrincipalC2]
        upgradesRifleDeAsaltoC2.splice(indiceUpgrade1ArmaPrincipalC2, 1)

        resolverConflictoAsaltoC2()

        let indiceUpgrade2ArmaPrincipalC2 = aleatorio(0, upgradesRifleDeAsaltoC2.length -1)
        spanUpgrade2ArmaPrincipalC2.innerHTML = upgradesRifleDeAsaltoC2[indiceUpgrade2ArmaPrincipalC2]
        
        //Arma Secundaria Javik/Kaidan
        
        let indiceArmaSecundariaC2 = aleatorio(0, pistolasPesadas.length -1)
        spanArmaSecundariaC2.innerHTML = pistolasPesadas[indiceArmaSecundariaC2]

        let indiceUpgrade1ArmaSecundariaC2 = aleatorio(0, upgradesPistolasC2.length -1)
        spanUpgrade1ArmaSecundariaC2.innerHTML = upgradesPistolasC2[indiceUpgrade1ArmaSecundariaC2]
        mejora1ASC2 = upgradesPistolasC2[indiceUpgrade1ArmaSecundariaC2]
        upgradesPistolasC2.splice(indiceUpgrade1ArmaSecundariaC2, 1)

        resolverConflictoPistolaC2()

        let indiceUpgrade2ArmaSecundariaC2 = aleatorio(0, upgradesPistolasC2.length -1)
        spanUpgrade2ArmaSecundariaC2.innerHTML = upgradesPistolasC2[indiceUpgrade2ArmaSecundariaC2]
    }
    else if (compañero2Seleccionado === "Liara T'Soni" || compañero2Seleccionado === "SID") {
        let indiceArmaPrincipalC2 = aleatorio(0, subfusiles.length -1)
        spanArmaPrincipalC2.innerHTML = subfusiles[indiceArmaPrincipalC2]

        let indiceUpgrade1ArmaPrincipalC2 = aleatorio(0, upgradesSubfusilesC2.length -1)
        spanUpgrade1ArmaPrincipalC2.innerHTML = upgradesSubfusilesC2[indiceUpgrade1ArmaPrincipalC2]
        mejora1APC2 = upgradesSubfusilesC2[indiceUpgrade1ArmaPrincipalC2]
        upgradesSubfusilesC2.splice(indiceUpgrade1ArmaPrincipalC2, 1)

        resolverConflictoSubfusilC2()

        let indiceUpgrade2ArmaPrincipalC2 = aleatorio(0, upgradesSubfusilesC2.length -1)
        spanUpgrade2ArmaPrincipalC2.innerHTML = upgradesSubfusilesC2[indiceUpgrade2ArmaPrincipalC2]
        
        //Arma Secundaria Liara/SID
        
        let indiceArmaSecundariaC2 = aleatorio(0, pistolasPesadas.length -1)
        spanArmaSecundariaC2.innerHTML = pistolasPesadas[indiceArmaSecundariaC2]

        let indiceUpgrade1ArmaSecundariaC2 = aleatorio(0, upgradesPistolasC2.length -1)
        spanUpgrade1ArmaSecundariaC2.innerHTML = upgradesPistolasC2[indiceUpgrade1ArmaSecundariaC2]
        mejora1ASC2 = upgradesPistolasC2[indiceUpgrade1ArmaSecundariaC2]
        upgradesPistolasC2.splice(indiceUpgrade1ArmaSecundariaC2, 1)

        resolverConflictoPistolaC2()

        let indiceUpgrade2ArmaSecundariaC2 = aleatorio(0, upgradesPistolasC2.length -1)
        spanUpgrade2ArmaSecundariaC2.innerHTML = upgradesPistolasC2[indiceUpgrade2ArmaSecundariaC2]
    }
    else if (compañero2Seleccionado === "Garrus Vakarian" || compañero2Seleccionado === "Ashley Williams") {
        let indiceArmaPrincipalC2 = aleatorio(0, riflesDeAsalto.length -1)
        spanArmaPrincipalC2.innerHTML = riflesDeAsalto[indiceArmaPrincipalC2]

        let indiceUpgrade1ArmaPrincipalC2 = aleatorio(0, upgradesRifleDeAsaltoC2.length -1)
        spanUpgrade1ArmaPrincipalC2.innerHTML = upgradesRifleDeAsaltoC2[indiceUpgrade1ArmaPrincipalC2]
        mejora1APC2 = upgradesRifleDeAsaltoC2[indiceUpgrade1ArmaPrincipalC2]
        upgradesRifleDeAsaltoC2.splice(indiceUpgrade1ArmaPrincipalC2, 1)

        resolverConflictoAsaltoC2()

        let indiceUpgrade2ArmaPrincipalC2 = aleatorio(0, upgradesRifleDeAsaltoC2.length -1)
        spanUpgrade2ArmaPrincipalC2.innerHTML = upgradesRifleDeAsaltoC2[indiceUpgrade2ArmaPrincipalC2]
        
        //Arma Secundaria Garrus/Ashley
        
        let indiceArmaSecundariaC2 = aleatorio(0, riflesFrancotiradores.length -1)
        spanArmaSecundariaC2.innerHTML = riflesFrancotiradores[indiceArmaSecundariaC2]

        let indiceUpgrade1ArmaSecundariaC2 = aleatorio(0, upgradesFrancotiradoresC2.length -1)
        spanUpgrade1ArmaSecundariaC2.innerHTML = upgradesFrancotiradoresC2[indiceUpgrade1ArmaSecundariaC2]
        mejora1ASC2 = upgradesFrancotiradoresC2[indiceUpgrade1ArmaSecundariaC2]
        upgradesFrancotiradoresC2.splice(indiceUpgrade1ArmaSecundariaC2, 1)

        resolverConflictoFrancotiradorC2()

        let indiceUpgrade2ArmaSecundariaC2 = aleatorio(0, upgradesFrancotiradoresC2.length -1)
        spanUpgrade2ArmaSecundariaC2.innerHTML = upgradesFrancotiradoresC2[indiceUpgrade2ArmaSecundariaC2]
    }
    else if (compañero2Seleccionado === "James Vega") {
        let indiceArmaPrincipalC2 = aleatorio(0, riflesDeAsalto.length -1)
        spanArmaPrincipalC2.innerHTML = riflesDeAsalto[indiceArmaPrincipalC2]

        let indiceUpgrade1ArmaPrincipalC2 = aleatorio(0, upgradesRifleDeAsaltoC2.length -1)
        spanUpgrade1ArmaPrincipalC2.innerHTML = upgradesRifleDeAsaltoC2[indiceUpgrade1ArmaPrincipalC2]
        mejora1APC2 = upgradesRifleDeAsaltoC2[indiceUpgrade1ArmaPrincipalC2]
        upgradesRifleDeAsaltoC2.splice(indiceUpgrade1ArmaPrincipalC2, 1)

        resolverConflictoAsaltoC2()

        let indiceUpgrade2ArmaPrincipalC2 = aleatorio(0, upgradesRifleDeAsaltoC2.length -1)
        spanUpgrade2ArmaPrincipalC2.innerHTML = upgradesRifleDeAsaltoC2[indiceUpgrade2ArmaPrincipalC2]
        
        //Arma Secundaria James
        
        let indiceArmaSecundariaC2 = aleatorio(0, escopetas.length -1)
        spanArmaSecundariaC2.innerHTML = escopetas[indiceArmaSecundariaC2]

        let indiceUpgrade1ArmaSecundariaC2 = aleatorio(0, upgradesEscopetasC2.length -1)
        spanUpgrade1ArmaSecundariaC2.innerHTML = upgradesEscopetasC2[indiceUpgrade1ArmaSecundariaC2]
        mejora1ASC2 = upgradesEscopetasC2[indiceUpgrade1ArmaSecundariaC2]
        upgradesEscopetasC2.splice(indiceUpgrade1ArmaSecundariaC2, 1)

        resolverConflictoEscopetaC2()

        let indiceUpgrade2ArmaSecundariaC2 = aleatorio(0, upgradesEscopetasC2.length -1)
        spanUpgrade2ArmaSecundariaC2.innerHTML = upgradesEscopetasC2[indiceUpgrade2ArmaSecundariaC2]
    }
    else if (compañero2Seleccionado === "Tali'Zorah") {
        let indiceArmaPrincipalC2 = aleatorio(0, escopetas.length -1)
        spanArmaPrincipalC2.innerHTML = escopetas[indiceArmaPrincipalC2]

        let indiceUpgrade1ArmaPrincipalC2 = aleatorio(0, upgradesEscopetasC2.length -1)
        spanUpgrade1ArmaPrincipalC2.innerHTML = upgradesEscopetasC2[indiceUpgrade1ArmaPrincipalC2]
        mejora1APC2 = upgradesEscopetasC2[indiceUpgrade1ArmaPrincipalC2]
        upgradesEscopetasC2.splice(indiceUpgrade1ArmaPrincipalC2, 1)

        resolverConflictoEscopetaC2()

        let indiceUpgrade2ArmaPrincipalC2 = aleatorio(0, upgradesEscopetasC2.length -1)
        spanUpgrade2ArmaPrincipalC2.innerHTML = upgradesEscopetasC2[indiceUpgrade2ArmaPrincipalC2]
        
        //Arma Secundaria Tali
        
        let indiceArmaSecundariaC2 = aleatorio(0, pistolasPesadas.length -1)
        spanArmaSecundariaC2.innerHTML = pistolasPesadas[indiceArmaSecundariaC2]

        let indiceUpgrade1ArmaSecundariaC2 = aleatorio(0, upgradesPistolasC2.length -1)
        spanUpgrade1ArmaSecundariaC2.innerHTML = upgradesPistolasC2[indiceUpgrade1ArmaSecundariaC2]
        mejora1ASC2 = upgradesPistolasC2[indiceUpgrade1ArmaSecundariaC2]
        upgradesPistolasC2.splice(indiceUpgrade1ArmaSecundariaC2, 1)

        resolverConflictoPistolaC2()

        let indiceUpgrade2ArmaSecundariaC2 = aleatorio(0, upgradesPistolasC2.length -1)
        spanUpgrade2ArmaSecundariaC2.innerHTML = upgradesPistolasC2[indiceUpgrade2ArmaSecundariaC2]
    }
}

function resolverConflictoFrancotiradorC1() {
    if (mejora1APC1 === "Mira Mejorada") {
        upgradesFrancotiradoresC1.splice(5, 1)
    } 
    else if (mejora1APC1 === "Cañón Alargado") {
        upgradesFrancotiradoresC1.splice(6, 1)
    }
    else if (mejora1APC1 === "Módulo de Concentración") {
        upgradesFrancotiradoresC1.splice(4, 1)
    }
    else if (mejora1APC1 === "Mira Térmica") {
        upgradesFrancotiradoresC1.splice(0, 1)
    } 
    else if (mejora1APC1 === "Cañón de Gran Velocidad") {
        upgradesFrancotiradoresC1.splice(2, 1)
    }
    else if (mejora1APC1 === "Materiales Ultraligeros") {
        upgradesFrancotiradoresC1.splice(4, 1)   
    }
}

function resolverConflictoAsaltoC1() {
    if (mejora1APC1 === "Mira de precisión") {
        upgradesRifleDeAsaltoC1.splice(5, 1)
    } 
    else if (mejora1APC1 === "Cañón Alargado") {
        upgradesRifleDeAsaltoC1.splice(6, 1)
    }
    else if (mejora1APC1 === "Mod. Perforación") {
        upgradesRifleDeAsaltoC1.splice(4, 1)
    }
    else if (mejora1APC1 === "Mira Térmica") {
        upgradesRifleDeAsaltoC1.splice(0, 1)
    } 
    else if (mejora1APC1 === "Cañón de Gran Velocidad") {
        upgradesRifleDeAsaltoC1.splice(1, 1)
    }
    else if (mejora1APC1 === "Materiales Ultraligeros") {
        upgradesRifleDeAsaltoC1.splice(2, 1)   
    }
}

function resolverConflictoSubfusilC1() {
    if (mejora1APC1 === "Mira de Subfusil") {
        upgradesSubfusilesC1.splice(4, 1)
    } 
    else if (mejora1APC1 === "Cañón Gran Calibre") {
        upgradesSubfusilesC1.splice(6, 1)
    }
    else if (mejora1APC1 === "Materiales Ultraligeros") {
        upgradesSubfusilesC1.splice(5, 1)
    }
    else if (mejora1APC1 === "Magnificador de Poderes") {
        upgradesSubfusilesC1.splice(0, 1)
    } 
    else if (mejora1APC1 === "Cañón de Gran Velocidad") {
        upgradesSubfusilesC1.splice(2, 1)
    }
    else if (mejora1APC1 === "Sistema de Retroceso") {
        upgradesSubfusilesC1.splice(4, 1)   
    }
}

function resolverConflictoEscopetaC1() {
    if (mejora1APC1 === "Cañón Delgado") {
        upgradesEscopetasC1.splice(4, 1)
    } 
    else if (mejora1APC1 === "Cañón Gran Calibre") {
        upgradesEscopetasC1.splice(6, 1)
    }
    else if (mejora1APC1 === "Bayoneta") {
        upgradesEscopetasC1.splice(5, 1)
    }
    else if (mejora1APC1 === "Materiales Ultraligeros") {
        upgradesEscopetasC1.splice(0, 1)
    } 
    else if (mejora1APC1 === "Cañón de Gran Velocidad") {
        upgradesEscopetasC1.splice(1, 1)
    }
    else if (mejora1APC1 === "Omnihoja") {
        upgradesEscopetasC1.splice(2, 1)   
    } 
}

function resolverConflictoPistolaC1() {
    if (mejora1ASC1 === "Mira para Pistola") {
        upgradesPistolasC1.splice(4, 1)
    } 
    else if (mejora1ASC1 === "Cañón de Gran Calibre") {
        upgradesPistolasC1.splice(6, 2)
    }
    else if (mejora1ASC1 === "Mejora de Cargador") {
        upgradesPistolasC1.splice(5, 1)
    }
    else if (mejora1ASC1 === "Materiales Ultraligeros") {
        upgradesPistolasC1.splice(2, 1)
    } 
    else if (mejora1ASC1 === "Cañón Pesado") {
        upgradesPistolasC1.splice(7, 1)
        upgradesPistolasC1.splice(1, 1)
    }
    else if (mejora1ASC1 === "Sistema de Traumatismo Craneal") {
        upgradesPistolasC1.splice(7, 1)
        upgradesPistolasC1.splice(1, 1)   
    }
}

function resolverConflictoFrancotiradorC2() {
    if (mejora1APC2 === "Mira Mejorada") {
        upgradesFrancotiradoresC2.splice(5, 1)
    } 
    else if (mejora1APC2 === "Cañón Alargado") {
        upgradesFrancotiradoresC2.splice(6, 1)
    }
    else if (mejora1APC2 === "Módulo de Concentración") {
        upgradesFrancotiradoresC2.splice(4, 1)
    }
    else if (mejora1APC2 === "Mira Térmica") {
        upgradesFrancotiradoresC2.splice(0, 1)
    } 
    else if (mejora1APC2 === "Cañón de Gran Velocidad") {
        upgradesFrancotiradoresC2.splice(2, 1)
    }
    else if (mejora1APC2 === "Materiales Ultraligeros") {
        upgradesFrancotiradoresC2.splice(4, 1)   
    }
}

function resolverConflictoAsaltoC2() {
    if (mejora1APC2 === "Mira de precisión") {
        upgradesRifleDeAsaltoC2.splice(5, 1)
    } 
    else if (mejora1APC2 === "Cañón Alargado") {
        upgradesRifleDeAsaltoC2.splice(6, 1)
    }
    else if (mejora1APC2 === "Mod. Perforación") {
        upgradesRifleDeAsaltoC2.splice(4, 1)
    }
    else if (mejora1APC2 === "Mira Térmica") {
        upgradesRifleDeAsaltoC2.splice(0, 1)
    } 
    else if (mejora1APC2 === "Cañón de Gran Velocidad") {
        upgradesRifleDeAsalto.splice(1, 1)
    }
    else if (mejora1APC2 === "Materiales Ultraligeros") {
        upgradesRifleDeAsaltoC2.splice(2, 1)   
    }
}

function resolverConflictoSubfusilC2() {
    if (mejora1APC2 === "Mira de Subfusil") {
        upgradesSubfusilesC2.splice(4, 1)
    } 
    else if (mejora1APC2 === "Cañón Gran Calibre") {
        upgradesSubfusilesC2.splice(6, 1)
    }
    else if (mejora1APC2 === "Materiales Ultraligeros") {
        upgradesSubfusilesC2.splice(5, 1)
    }
    else if (mejora1APC2 === "Magnificador de Poderes") {
        upgradesSubfusilesC2.splice(0, 1)
    } 
    else if (mejora1APC2 === "Cañón de Gran Velocidad") {
        upgradesSubfusilesC2.splice(2, 1)
    }
    else if (mejora1APC2 === "Sistema de Retroceso") {
        upgradesSubfusilesC2.splice(4, 1)   
    }
}

function resolverConflictoEscopetaC2() {
    if (mejora1APC2 === "Cañón Delgado") {
        upgradesEscopetasC2.splice(4, 1)
    } 
    else if (mejora1APC2 === "Cañón Gran Calibre") {
        upgradesEscopetasC2.splice(6, 1)
    }
    else if (mejora1APC2 === "Bayoneta") {
        upgradesEscopetasC2.splice(5, 1)
    }
    else if (mejora1APC2 === "Materiales Ultraligeros") {
        upgradesEscopetasC2.splice(0, 1)
    } 
    else if (mejora1APC2 === "Cañón de Gran Velocidad") {
        upgradesEscopetas.splice(1, 1)
    }
    else if (mejora1APC2 === "Omnihoja") {
        upgradesEscopetasC2.splice(2, 1)   
    } 
}

function resolverConflictoPistolaC2() {
    if (mejora1ASC2 === "Mira para Pistola") {
        upgradesPistolasC2.splice(4, 1)
    } 
    else if (mejora1ASC2 === "Cañón de Gran Calibre") {
        upgradesPistolasC2.splice(6, 2)
    }
    else if (mejora1ASC2 === "Mejora de Cargador") {
        upgradesPistolasC2.splice(5, 1)
    }
    else if (mejora1ASC2 === "Materiales Ultraligeros") {
        upgradesPistolasC2.splice(2, 1)
    } 
    else if (mejora1ASC2 === "Cañón Pesado") {
        upgradesPistolasC2.splice(7, 1)
        upgradesPistolasC2.splice(1, 1)
    }
    else if (mejora1ASC2 === "Sistema de Traumatismo Craneal") {
        upgradesPistolasC2.splice(7, 1)
        upgradesPistolasC2.splice(1, 1)   
    }
}

function reiniciar() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener("load", iniciarRandomizador)