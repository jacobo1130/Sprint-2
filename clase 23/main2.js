class Person {
    constructor (name, lastname, age){
        this.name=name;
        this.lastname=lastname;
        this.age=age;
        
    }
    fullname(){
        return `${this.name} ${this.lastname}` ;// simbolo para esto alt+ arriba enter
    }

    is_old() {
        this.age >= 18 ? true : false; //Operador ternario
    }
}
const lucho = new Person("luis","de seta", 30);
const nico= new Person("Nicolas", "Zuleta",34);
const clau= new Person("Claudia", "Rios",17);

console.log(lucho.fullname());
console.log(nico.is_old());
console.log(clau.is_old());
nico._name="Iñaki";
console.log(nico)
