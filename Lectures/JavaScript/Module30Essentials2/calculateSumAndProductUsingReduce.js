/*
Take  a number n as an input form user.Create a array from 1 to n.
use reduce method to calculate sum and product of all numbers in the Array.
*/

let n=prompt("Enter the Number");
let inputArray=[];
for(let i=1;i<=n;i++){
    inputArray[i-1]=i;
}
console.log(inputArray);

let sum=inputArray.reduce((prev,curr)=>{
    return prev+curr;
});

console.log(sum);

let product=inputArray.reduce((prev,curr)=>{
    return prev*curr;
});

console.log(product);