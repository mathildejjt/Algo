

// Exercice 2 - TUEUR EN SERIE


class Survivant {
    constructor (name, caracteristic) {
    this.name = name
    this.caracteristic = caracteristic
}
}

const names = [
    'Julia',
    'Thomas',
    'Jason',
    'Edouard',
    'Lucy'
    
]

const caracteristic = [
    'blonde',
    'sportif',
    'nerd',
    'flippé',
    'bavard'
]

let survivant1 = new Survivant (
    names [Math.floor (Math.random() * names.length)],
    caracteristic [Math.floor (Math.random () * caracteristic.length)] 
)

attackSurvivant () {
    names.attack (Math.random) 
}

esquive () {
console.log(survivant1 + ' a evite l\'attaque du' + tueur)
}

if tueur (attackSurvivant) {
    console.log (names + " a ete assassine")
} else { (esquive) 
    console.log (names + " a esquivé et infligé 10 points de degats ")

}

console.log(names.caracteristic)
