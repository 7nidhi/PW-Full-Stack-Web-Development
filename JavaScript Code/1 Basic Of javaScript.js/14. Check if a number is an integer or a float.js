//Check if a number is an integer or a float.

function checkNumIntegerOrFloat(x){
    console.log(`${x} is ${x%1===0?'Integer':'Float'}`);
}

function checkNumIntegerOrFloat2(x){
    console.log(`${x} is ${Number.isInteger(x)?'Integer':'Float'}`);
}

checkNumIntegerOrFloat(122.5);
checkNumIntegerOrFloat(123);

checkNumIntegerOrFloat2(13);
checkNumIntegerOrFloat2(123.566);

