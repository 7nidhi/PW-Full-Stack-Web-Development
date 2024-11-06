//Check if a number is positive, negative, or zero. 

function CheckPositiveNegativeZero(x){
    if(x>0){
        console.log(`${x} is positive number`);
    }
    else if(x<0){
            console.log(`${x} is negative number`);
        }
    else if(x==0){
        console.log(`${x} is zero`);
    }
}


CheckPositiveNegativeZero(-1234);
CheckPositiveNegativeZero(123);
CheckPositiveNegativeZero(0);