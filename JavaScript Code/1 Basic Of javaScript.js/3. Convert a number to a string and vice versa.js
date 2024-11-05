//Convert a number to a string and vice versa.

function numberToString(num){
    return num.toString();
}

function stringToNumber(num){
    return Number(num);
}


let num1=numberToString(15);
let num2=stringToNumber("15");

console.log(`Value is ${num1}, checking type is:${typeof(num1)}`);
console.log(`Value is ${num2}, checking type is:${typeof(num2)}`);