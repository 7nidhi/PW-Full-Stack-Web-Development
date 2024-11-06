//Convert a number to a fixed decimal format. 

function fixedDecimal(num,decimal_place){
    console.log(`${num},${decimal_place}: => ${num.toFixed(decimal_place)}`);

}

fixedDecimal(123.345,2);
fixedDecimal(12345.22,3);