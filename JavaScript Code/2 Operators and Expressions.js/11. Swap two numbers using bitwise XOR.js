//Swap two numbers using bitwise XOR.

let x=5           //Binary:0101
let y=3           // Binary:0011

console.log(`before swap x is:${x} and y is:${y}`);

x=x^y;            //x=6,0110
y=x^y;            //y=5  ,0101
x=x^y;            //x=3 , 0011

console.log(`After swap x is:${x} and y is:${y}`);


