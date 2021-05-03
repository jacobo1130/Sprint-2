const myFirstObject ={
    name:"Jacobo",
    lastname:"Vasquez",
    weigth:"70kg",
    married:false,
    saludar: function(){
        return "Hola Mundo"
        
    }
};
// Constructor
function Player (name,lastname,age){
    this.name=name;
    this.lastname=lastname;
    this.age=age;


    Player.prototype.attack=function(){
        return "Attack";
    }
}
/*
console.log(Player.saludar());

const player1 = new Player("Goku","Kakaroto", 30);
const player2 = new Player("Naruto","Uzumaki", 17);
console.log(myFirstObject)

console.log(player2);
 */
class PLayer {
    constructor(name, lastname, age){
        this.name=name;
        this.lastname=lastname;
        this.age=age;
    }
    attack(){
        return "Attack";
    }
}
class Ninja extends Player {
    constructor(name,lastname,age,ki){
       super(name,lastname,age);
       this.ki=ki;
    }
}
const player1 = new Player("Goku","Kakaroto", 30);
const player2 = new Player("Naruto","Uzumaki", 30,"1000");
console.log(player1);
console.log(player2);