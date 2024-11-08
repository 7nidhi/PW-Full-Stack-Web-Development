//Find the remainder of division without using the module operator.
 

function findRemainder(x, y) {
    let q = Math.floor(x / y); // Get the integer quotient
    let m = y * q;             // Multiply back
    let re = x - m;            // Subtract to get the remainder
    console.log(re);
}

findRemainder(7, 3);