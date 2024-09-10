//we use concept of scope to figure out where variable or function is accessible/visible.
//4 pillar of JavaSript
//1:Scopes and Closure , 2:Coercion and types, 3:Objects and Classes, 4: Async Programming
/*acually jS have 2 execution phase-
phase 1: compilation and scope resolution
phase 2:Interpretaition or Execution phase
*/
/*Scope resolution- this means we need to allocate the scope /visibility to each and every
veriable together.
Types in scope-
1-Global scope
2-Function scope
3-Block scope
Global Scope-global scoped variable are accessible throughout your program, be it in a function,for loop
,while loop,if else anything.
*/
let x=10;  //x is defined outside of any funtion but accessible through any any function
function fun(x){
    console.log(x);
}
function gun(){
    for(let x=0;x<10;x++){}
}
fun();
gun();
console.log("value of x :",x);

/*Function scope-visibility of varibale is only inside the function where varibale has been defined,
you can not  access it ouside the function. */

function fun(){
    let y=10;  //y is defined inside of funtion and can not  accessible through any any function
    console.log(y);
}
function gun(){
    for(let y=0;y<10;y++){}
}
fun();
gun();
console.log("value of y :",y);
/*

Block Scope- we can define a pair of  curly braces, may be with if-else,while loop,
for loop,or may be without anything,it creates something called block.
Block- Block is collection of valid JS instructions enclosed in a pair of curly braces.
*/

{
    let z=10;  //here z is visible
    console.log(z);
}
console.log("z is:",z); //here z is not visible, throwing error

/*
How a scope is declared is matter. there are 3 ways to declare a variable
1-var: helps us to decalre function scope or global scoped varibales.
2-let:helps us to intialized block scoped varibale.
3-const: also helps us to intialized block scoped varibale.
*/

/*
any variable  is used only 2 ways:
1-RHS:i.e. when we consume the variable
2-LHS:i.e. when we assign value or declare the variable
*/
var num=10;   //LHS
console.log(num);   //RHS

/*
Lexical scoping/Lexical Parsing-JS does scope resolution using lexical mechanism.
It is also  callled as static scoping.
In lexical scoping ,we allocates scopes to varibale during compile time.
"Note"-In js, values to the varibale are allocated in phase 2 but scope of variable is decided during phase 1.
*/

/*
var
var helps us to define global and function vafriable.we can not make a block scoped varible using var.
A Variable having function scope has a special property that it can be defined anywhere in the fucntion but 
will be still accessible through the whole function.                              
*/
function fact(){
    console.log(" the value of a is:",a);
    var a=10;
    console.log("value of a is",a);
}
fact();

//Strict mode-stop to making autoglobal variable
"use strict";