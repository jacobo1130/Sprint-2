const tabla=parseInt(prompt("que tabla de multiplicar quiere ver"));
numtabla=1;
/* for (let i=0; i<10 ; i++){
 resultado=tabla*numtabla;
 console.log(tabla + "x" + numtabla + "=" + resultado);
 numtabla++;
} */

while (numtabla < 11){
    resultado=tabla*numtabla;
    console.log(tabla + "x" + numtabla + "=" + resultado);
    numtabla++;
}
