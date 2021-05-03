//const myFirstArray = [1, "Patri", false, 23, undefined];
const myFirstArray = [1, 4, 6, 23, 102];
let suma = 0;
/* console.log(myFirstArray);
console.log(myFirstArray[2]); */

for (let i = 0; i < myFirstArray.length; i++) {
    suma = suma + myFirstArray[i];
}

console.log(myFirstArray);
myFirstArray.push("Hola");
console.log(myFirstArray);
myFirstArray.pop();
console.log(myFirstArray);
alert(myFirstArray[myFirstArray.length -1]);
console.log(myFirstArray.toString());
console.log(myFirstArray.reverse());
console.log(myFirstArray.slice(1, 3));
console.log(myFirstArray);
//alert("la suma total es: " + suma);
