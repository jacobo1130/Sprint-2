const mixArray = [true, 23, "12", "this", undefined, 24, 91, 3, 9, "34"];
const notNumbersArray = [];
/**
 * 
 */
const addArrayNumbers = function() {
    let totalNumbers = 0;
    for (let i = 0; i < mixArray.length; i++) {
        if(typeof mixArray[i] === "number") {
            totalNumbers += mixArray[i];
        } else {
            //console.log(mixArray[i]);
            notNumberArray(mixArray[i]);
        }
    }

    return totalNumbers;
}

/**
 * 
 */
/* const notNumberArray = function(){
    let notNumber = [];
    for (let i = 0; i < mixArray.length; i++) {
        if(typeof mixArray[i] !== "number") {
            notNumber.push(mixArray[i]);
        }
    }

    return notNumber;
} */

const notNumberArray = function(element) {
    //console.log(element);
    notNumbersArray.push(element);
}

//console.log(notNumberArray());
//alert(`La suma de los números  es ${addArrayNumbers()}`);
addArrayNumbers()
console.log(`los elementos q no son números son: ${notNumbersArray}`)