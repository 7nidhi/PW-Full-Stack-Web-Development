//Check if a number is within a given range.

function isInRange(num1,num2,numCheck){
    let max=num1;
    let min=num2;
    if(num2>num1){
        max=num2;
        min=num1;
    }
    if(numCheck<=max && numCheck >=min){
        console.log(`the ${numCheck} is within the given range`);
    
    }
    else{
        console.log(`the ${numCheck} is not in the given range`);
    }
}
    
isInRange(5,8,6);
isInRange(8,3,4);
isInRange(8,3,2);
isInRange(8,3,9);
