/*
Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and
immediately displays the result.
*/
(function(num){
    let square=num*num;
    console.log(`Square of ${num} is ${square}`)
})(7);