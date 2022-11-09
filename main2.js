

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


console.log(names.caracteristic)