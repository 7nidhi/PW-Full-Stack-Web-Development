/*High Order function expect another funtion as an argument*/
// function h(x, fn()) here h id hof and fn() is callback function
function h(x, fn){
    console.log(x*x);
    fn();
}
h(10, function (){
    console.log("done with call back");

})

//Synchronous code- code will run line by line
console.log("Start");
setTimeout(function(){
    console.log("timer done")
} ,3000);
console.log("End");

//Problem with Callback function-1:Callback hell-callback into callback into callback,2:Inversion control-give control to other function 