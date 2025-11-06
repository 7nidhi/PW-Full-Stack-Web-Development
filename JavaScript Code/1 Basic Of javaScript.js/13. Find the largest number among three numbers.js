//Find the largest number among three numbers.
 function checkLargestNumber(x,y,z){
    if (x>y && x>z){
        console.log(`${x} is greatest number`);
    }
    else if(y>z && y>x){
        console.log(`${y} is greatest number`);
    }
    else if(z>x && z>y){
        console.log(`${z} is gteatest number`);
    }
 }

 checkLargestNumber(1,12,7);