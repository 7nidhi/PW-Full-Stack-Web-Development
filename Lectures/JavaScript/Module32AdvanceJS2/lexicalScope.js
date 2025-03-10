/*
let-
bth let and const  work in similar way when we talk about the scope perspective.
whenever we declare any variable with 'let' then varibale will get the scope of the nearest block.
if the nearest block is  a 'for' loop then vafiable gets scope of the for loop or 
if the nearest block is 'function' then varibale gets a block scope inside the function.

What is meaning of  bock scope inside the function? how it is different from var's function scope?
when we say function scope then its mean that no matter where we declare the variable in the function,
it is available thorughout the function.

But that is not case with block scope inside the function.
In a block scope variables are only accessible after thet are declared, we can not access them before their declaration.
*/
function fun(){
    console.log(x);  //undefined //TDZ area
    var x=10;        //hence x is var, and function scope, so it will available everywhere in the fucntion, no matter where we declare it.
    console.log(x);  //10 
}
fun();

/*Temporal dead zone-
Region  before the declaration of block scoped variable is called as temporal dead zone.
*/
/* let does not allow redeclaration of variable and this will be called out in phase 1.

let y=10;   //block scope in global area
console.log(y);
let y=30;    //error in phase 1.
console.log(y);
*/

/* Hoisting-
Hoisting is a consequesnce of the scoping  mechanism of JS. because of the fact that JS executed  your code
in phase 2, a lots of variables are already known during the phase 1, and  then they are accessed in phase2.
So it looks like to a lots of people that JS knows about a few varibales before thir declaration.
And indeed, it is true, becuase during phase 1 all the formal declarations are read, so js indeed knows about
the variable before execution phase. and the mechanism of knowing varible before their declaration line is termed
as 'Hoisting'.
This word is not an actual word present in the official ECMA script docs. The JS community came up with the one
word definition for this consequesnce.

Function Expression-
we can store a function in variable.
we are creating a function but first valid token is not a function keyword, hence we call this type of instruction
as function expression.
*/

const myfun=function fun(i){
    console.log("calling",x);
}

