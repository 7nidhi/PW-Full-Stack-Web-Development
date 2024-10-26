/*
for a given arrya student mark is 85,97,44,37,76,60.Find the average of studnet marks.
*/

let studentArr=[85,97,44,37,76,60];
let sum=0
for(let i=0;i<studentArr.length;i++){
    sum+=studentArr[i];
}
let average=sum/studentArr.length;
console.log(average);

let marks=[85,97,44,37,76,60];
let total=0;
for (let val of marks){
    total+=val;
}
let avg=total/marks.length;
console.log(`average of Student marks is ${avg}`);