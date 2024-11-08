//  Use the nullish coalescing operator to assign a default value
/* 
The nullish coalescing operator (??) in JavaScript is a useful feature for handling cases where a value
 might be null or undefined. It allows you to provide a default value if the original expression evaluates
  to null or undefined, making your code cleaner and safer.

*/

let value=null;
let defaultValue="Nidhi";
let name=value ?? defaultValue;
console.log(name);