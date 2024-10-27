//Reduce method- used where need calculation and return single value.

let arr=[1,2,3,4,5];
let output=arr.reduce((res,curr) =>{      //res=1,curr=2
    return res+curr;                     // res=res+curr =3
});

console.log(output);

//Filter Method
// Given array have student marks.Filter out the marks of studnet that scored 90+.

let marks=[87,33,64,99,86,100];
let result=marks.filter((val) =>{
    return val>90;
});

console.log(result);

