// se você digitar só function animal () no console, ele puxa a função ;)

function animal () 

let tipoAnimal = prompt('Qual é o tipo do animal?') //mamifero ou ave ou reptil

if (tipoAnimal == "mamifero") {
    let tipoMamifero = prompt("Qual é o tipo de mamifero?")
    if (tipoMamifero == "quadrupede") {
        let tipoQuadrupede = prompt("Qual é o tipo do quadrupede?")

        if (tipoQuadrupede == "carnivoro") {
            alert("Leão")
        } else {
            alert("Cavalo")
        }
    } else {
        if (tipoMamifero == "bipede") {
            let tipoBipede = prompt("Qual é o tipo de bipede?")
            if (tipoBipede == "onivoro") {
                alert("Homem")
            } else {
                alert("Macaco")
            }
        } else {
            if (tipoMamifero == "voador") {
                alert("Morcego")
            } else {
                alert("Baleia")
            }
        }
    }
} else {
    if (tipoAnimal == "ave") {
        let tipoAve = prompt("Qual é o tipo de Ave?")

        if (tipoAve == "não voadora") {
            let tipoAveVoadora = prompt("Qual é o tipo de Ave Não Voadora?")
            if (tipoAveVoadora == "tropical") {
                alert("avestruz")
            } else {
                alert("pinguim")
            }
        } else {
            if (tipoAve == "nadadora") {
                alert("pato")
            } else {
                alert("aguia")
            }
        }


    } else {
        //reptil
        let tipoReptil = prompt("Qual é o tipo de Reptil?")
        if (tipoReptil == "com casco") {
            alert("tartaruga")
        } else {
            if (tipoReptil == "carnivoro") {
                alert("crocodilo")
            } else {
                alert("cobra")
            }
        }

    }
}