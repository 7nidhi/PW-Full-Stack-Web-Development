//forEach loop in Array
//array.forEach(callback function)  A callback is a function passed an arugment to another fucntion.
//forEach() have 3 values-array.forEach(val,index,array itself)

let arr=[1,2,3,4,5];
arr.forEach(function printValue(val){   
    console.log(val);
});

arr.forEach((val) =>{
    console.log(val);
}
);