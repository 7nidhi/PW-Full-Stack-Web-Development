let arr1=[];
let arr2=[20,"Nidhi",true,200,-5,"Java"];

console.log(arr1,arr2);

console.log(arr2[3]);
 //we can updare the array

 arr2[3]="Java Script";
 console.log(arr2);

 let arr4=new Array(20,30,40);
 console.log(arr4);

 
 let arr5=new Array(3);  //make 3 size array
 console.log(arr5);

 let arr6=new Array(4).fill(-1);  //this will empty array with -1 using .fill() function.
 console.log(arr6);

 let ar=[2,3,4,5,6];
 console.log(ar.length);

 ar.push(7); //add element last in array
 console.log(ar);

 ar.pop();  //remove element from last 
 console.log(ar);

 ar.shift(); //remove elemnet from start in array
 console.log(ar);

 ar.unshift(1);  // add element from start
console.log(ar);

ar.reverse(); //reverse the array
console.log(ar);

console.log(ar.indexOf(4)); // return the index of element

let a1=[1,2,3,4];
let a2=[5,6,7];
let a3=a1.concat([8,9]);
console.log(a1,a2,a3);

let s=a1.join("");  //used to return string type
console.log(s);

console.log(a2.indexOf(10)); //if element is not available , return -1

let p= [10,20,30,40,50];
console.log(p.slice(1,3));
