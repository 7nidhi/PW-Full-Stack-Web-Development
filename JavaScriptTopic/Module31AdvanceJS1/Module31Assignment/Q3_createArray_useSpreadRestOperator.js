/*
You are given an array of numbers named myArray. Create a function that takes any number of arguments
and adds them to the existing array. Use the spread and rest operator.
*/

let myArray = [11, 12, 13, 14, 15];


function addToArray(...newNumbers) {      //Rest Operator to collect all argument
  myArray = [...myArray, ...newNumbers]; // Spread operator to merge the arrays
}

addToArray(16, 17, 18);
console.log(myArray);

addToArray(19);
console.log(myArray);

addToArray(20, 21, 22, 23, 24, 25);
console.log(myArray);
