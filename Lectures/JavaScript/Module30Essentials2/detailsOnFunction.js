function isEvenOdd(x){
    if(x%2==0){
        return "even"
    }
    else{
        return "Odd"
        }
}

let ans=isEvenOdd(10);
console.log(ans);

//2 parameter

function add(x, y=5){  //we can define default parameter if we do not pass manualy any parameter in argument.
    return x+y;
}

console.log(add(10));

//
function fun(...values){
    console.log(values);
}
fun(10,20,30,30,40,50);
