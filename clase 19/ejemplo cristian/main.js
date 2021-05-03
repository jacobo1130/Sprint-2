/**
 * Ejercicio 1 - Suma dos Números
 */
/* var num1 = parseInt(prompt("Ingrese numero 1"));
var num2 = parseInt(prompt("Ingrese numero 2"));
var result = num1 + num2;
alert(result); */

/**
 * Ejercicio 2 - Automovil
 */
 var KM_X_LTR = 15;
 var MAX_TANK_LTR = 45;
 var maxKmTank =  KM_X_LTR * MAX_TANK_LTR;
 var kmToRun = parseInt(prompt("Ingrese la cantidad en KM de su recorrido"));
 var countTank = kmToRun / maxKmTank;
 
 if(kmToRun >= maxKmTank) {
     //alert("Para llegar a su destino, necesitará " + countTank + " tanques");
     alert(`Para llegar a su destino, necesitará ${Math.ceil(countTank)} tanques`);
 } else {
     alert("Feliz viaje!!!!");
 }
 /* var num1;
 num1 = prompt("Ingrese numero 1"); */