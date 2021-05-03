/* const btn = document.querySelector(".btn-hello-world");      

// recibe 2 parametros, a veces un tercero, el primer parametro es el tipo de evento y el segundo es una funcion donde hago la logica
/* btn.addEventListener("click",function(){
    alert("AAA")
})   

const handleBtn=(e) => {
    console.log(e);
    btn.innerHTML="Hola Acamica 72";
    
}

for (let i = 0; index < array.length; index++) {
    const element = array[index];
    
}

btn.addEventListener("click",handleBtn); */

function newUser () {
    
    return {name: prompt ("Ingrese su nombre"),backgroundColor:prompt("Elija el color de fondo"),fontColor:prompt("Elija el tamaño de la fuente"),
    fontSize:prompt("Elija el tamaño de la fuente")}
}

let user = newUser();
console.log(user);

let div = document.createElement("div")
let textName = document.createTextNode(user.name)

div.appendChild(textName)
console.log(div);

document.body.appendChild(div)
div.classList.add("divBackground")
div.style.backgroundColor = user.backgroundColor;
div.style.fontSize = user.fontSize + "px"
div.style.fontColor = user.fontColor;

//document.createElement("div").appendChild(document.createTextNode(user.name))//
