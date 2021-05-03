// 1. Importar las dependencias
// 2. Declaración de variables
// 3. Funciones expresadas
// 4. Ejecución de funciones

// Funciones Expresadas -> Anónimas
const myFunction = function(a = "No hay nada", b = 23) {
    console.log(this);
    return `Hola Mundo ${a} ${b}`; // Interpolación de variables => ``
}
console.log(myFunction(2, 233));

const myFirstArrowFunction = () => {
    console.log(this);
    return `Hola desde mi primera función flecha`;
}
console.log(myFirstArrowFunction());

const myFirstArrowFunction_2 = () => console.log(`Hola desde mi primera función flecha 2`);
myFirstArrowFunction_2();

const myFirstArrowFunction_3 = a => console.log(`Hola desde mi primera función flecha 3 ${a}`);
myFirstArrowFunction_3("Un parametro");

const myFirstArrowFunction_4 = (a, b) => {
    const c = (a+b)*2;
    return c;
};
console.log(myFirstArrowFunction_4(2,9));

// Funciones Declaradas
/* function myFunction_2() {
    return "Hola Mundo 2";
} */


// Hoisting
//console.log(myVariable);
//let myVariable = 3;

//console.log(myFunction_2());

const person = {
    name: "Francisco",
    lastname: "Karkovic",
    age: 30,
    speak: function() {
        console.log(this);
        console.log(`Estoy hablando y me llame ${this.name}`);
    },
    coding: () => {
        console.log(this);
        console.log(`Estoy codeando y me llamo ${this.name}`);
    }
}

person.speak();
person.coding();