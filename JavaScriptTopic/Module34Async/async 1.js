/*Higher order function-
these are those function which accept another fucntion as an argument.

Call back fucntion-
these are those function which are passed as an argument to the hof. we can implement fucntion at run time
*/
const arr=[1,2,3,4,5,6];
// arr.map(function f(){});  //map ->hof  f() -> call back

function mymap(arr,fn){   //mymap ->hof
    let result=[];
    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i],i));
    }
    return result;
}
console.log(mymap(arr,function g(element){  //g() ->call back function
    return element**2;
}
))
