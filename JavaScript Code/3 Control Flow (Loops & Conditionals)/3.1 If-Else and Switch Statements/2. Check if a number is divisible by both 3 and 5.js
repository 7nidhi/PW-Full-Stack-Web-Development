// Check if a number is divisible by both 3 and 5.
function checkDivisible(x){
    if(x%3===0 && x%5===0){
        console.log(`${x} is divisible by  and 5`);
    }
    else{
        console.log(`${x} is not divisible by 3 and 5`);
    }
}


checkDivisible(5);