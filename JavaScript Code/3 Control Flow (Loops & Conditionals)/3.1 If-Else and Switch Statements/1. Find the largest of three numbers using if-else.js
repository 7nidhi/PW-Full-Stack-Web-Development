//Find the largest of three numbers using if-else.

function findLargest(x,y,z){

    if(x>y && x>z){
        console.log(`${x} is greatest`);
    }
    else if(y>x && y>z){
        console.log(`${y} is greatest`);
    }
    else if(z>x && z>y){
        console.log(`${z} is greatest`);
    } 

}


findLargest(4,7,0);