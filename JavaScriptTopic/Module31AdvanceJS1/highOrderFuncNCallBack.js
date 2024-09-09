/*High Order function expect another funtion as an argument*/
// function h(x, fn()) here h id hof and fn() is callback function
function h(x, fn){
    console.log(x*x);
    fn();
}
h(10, function (){
    console.log("done with call back");

})