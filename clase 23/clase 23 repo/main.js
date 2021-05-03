const myFirstObject = {
    name: "Iñaki",
    lastname: "Galdós",
    weight: "70kg",
    married: false,
    saludar: function() {
        console.log(this);
        return "Hola Mundo"
    }
};

// Prototypes
// Constructor
/* function Player(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.saludar = function() {
        return "hOLA";
    }
} */

/* Player.prototype.attack = function() {
    return "Attack";
}

console.log(Player.saludar());

const player1 = new Player("Goku", "Kakaroto", 30);
const player2 = new Player("Naruto", "Uzumaki", 17);
console.log(player1)
console.log(player2); */

// Clases a parti de ECMAScript 2.015 o ES6
// Sintactic sugar
class Player {
    constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }

    get _name() {
        return this.name;
    }

    get _lastname() {
        return this.lastname;
    }

    get _age() {
        return this.age;
    }

    set _name(name) {
        this.name = name;
        return this.name;
    }
    
    // Static methods sirven para podrlos ejecutar sin la necesidad de instanciar un objeto
    static attack() {
        //console.log(this);
        return "Attack";
    }
}

//console.log(Player.attack());

// Herencia (extends)
class Ninja extends Player {
    constructor(name, lastname, age, ki) {
        super(name, lastname, age);
        this.ki = ki;
    }
}

const player1 = new Player("Goku", "Kakaroto", 30);
const player3 = new Player("Seiya", "Pegasus", 20);
const player2 = new Ninja("Naruto", "Uzumaki", 18, "1000");
console.log(player1._name);
console.log(player1);
console.log(player1._name = "Luisa");
console.log(player1);
//console.log(player2);