// 1. Global
const myGlobalVariable = "Hola Mundo";
const NAME_ADMIN = "Jacobo Vassquez";

const grettings = function() {
    const NAME_ADMIN = "Jacobo Vassquez"; // Function Scope
    alert(myGlobalVariable);
}

const username = function() {
    if(NAME_ADMIN === "Santiago Moreno") {
        alert("Hola Admin");
        const message = "Tu nombre es Santiago Moreno";
    } else {
        alert("No eres admin")
    }

    alert(message);
}


//alert(NAME_ADMIN)
//grettings();
username();