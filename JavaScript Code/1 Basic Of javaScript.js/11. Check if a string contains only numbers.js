//Check if a string contains only numbers.
function isNumber(str){
    return !isNaN(str) && str.trim()!=="";
}

let a="23456";
let b="2345ds";
console.log(`${a} contains only numbers = ${isNumber(a)}`);
console.log(`${b} constains only numbers = ${isNumber(b)}`);
