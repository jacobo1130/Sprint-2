let i;
let par = 0;
let impar = 0;

const evaluateNumber = function (i) {

    if (i % 2 === 0) {
        par++;
    } else {
        impar++;
    }
    if (par > impar) {
        return par;
    } else if (impar > par) {
        return impar;
    } else {
        return "la cantidad de numeros pares e impares es igual"
    }

}
do {
    i = parseInt(prompt("digite un número"));
    alert(evaluateNumber(i));
} while (i !== 0);
