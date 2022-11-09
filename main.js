

// EXERCICE 1 - TAXI 


let person = {
    name: 'John',
    cool: 10,
}

const musics = [ 
    " Anissa - Wejdene ",
    " Marea - FredAgain ",
    " Tate - FredAgain ",
    " Dermot - FredAgain ",
]

let trajet = {
    changes: 0,
    radio: musics [0],
    redlights : 30,
    }

attackSurvivant () {
    radio.musics (Math.random) 
}

function takeTaxi(person, trajet) {
    while (trajet.redlights > 0) {

if (radio.musics == [0]) {
    person.cool = person.cool - 1
    console.log(person.name + ' perd un point de santé mentale.') 
    trajet.changes. = trajet.changes + 1
    console.log(person.name + ' change de taxi.') 
}
if (radio.musics == [1, 2, 3]) {
    trajet.redlights = trajet.redlights - 1
    console.log (person.name + ' poursuit son trajet avec' + radio.musics + 'il reste' + redlights + 'redlights' )
}

if (person.cool <= 0) {
    console.log(person.name + ' a explosé')
    break

} else { (redlights = 0) 
    console.log(person.name + ' est arrivé chez lui')  
}
}
}

