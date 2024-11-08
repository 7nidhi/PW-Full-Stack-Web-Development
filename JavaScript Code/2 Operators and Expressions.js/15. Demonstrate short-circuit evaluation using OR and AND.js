//Demonstrate short-circuit evaluation using && and ||.
/*
Short-circuiting in JavaScript is a concept that occurs when logical operators, such as && (AND) and 
|| (OR), evaluate expressions and stop as soon as the result is determined.

*/

let num1=0;
let num2= "Nidhi";

let result=num1 || num2;
let result2=num1 && num2;

console.log(result);
console.log(result2);