class Person {
    constructor(name, lastname, age) {
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }

    set _name(name) {
        this.name = name;
        return this.name;
    }

    fullname() {
        return `${this.name} ${this.lastname}`;
    }

    is_old() {
        return this.age >= 18 ? true : false; //Operador ternario
    }
}

const lucho = new Person("Luis", "De Seta", 30);
const nico = new Person("Nicolas", "Zuleta", 34);
const clau = new Person("Claudia ", "Rios", 17);

console.log(lucho.fullname());
console.log(nico.is_old());
console.log(clau.is_old());
nico._name = "Iñaki";
console.log(nico);