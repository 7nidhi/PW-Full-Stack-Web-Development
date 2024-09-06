console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

//nullish coalescing OP (??)- used for null/undefined values
//if x??y  if x is null or undifined then return y else x.
let x= null?? 90;
console.log(x);

let y= 'nidhi'?? 90;
console.log(y);
