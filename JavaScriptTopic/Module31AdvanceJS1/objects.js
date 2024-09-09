let obj={id:1, name:"Nidhi", age:26, city:"Banaras"};
console.log(obj);
let emp= new Object();  //object create
emp.id=10;
emp.name="Ram";
emp.age=26;
console.log(emp);
function Emp(i,n,s){
    this.id=i;
    this.name=n;
    this.salary=s;
}

const e=new Emp(103, "Ammy", 150000);
console.log(e);
console.log(emp.id);   //fetching data 
console.log(emp['name']);  //fetching data

emp.salary=150000; //updating keys and values
console.log(emp);
emp['name']="Radhey"; //updatng the value

console.log(emp);

delete emp.id;  //this will delete the keys and value
console.log(emp);


let product={
    name:"IPhone 15max",
    Company:"Apple",
    price:150000,
    warannty:2,
    color:"white",
}

Object.keys(product); //fetch all keys of object
Object.values(product); //fetch all value of object
Object.entries(product); //getch all keys values pair
Object.keys(product).length; //find the number of key valeu pairs
//Mutability an dimmutability
//mutability- we can change the variable value.
//immutability-we can not change the variable value. using const, and initializing is important other wise this will give error.
//if we hae object so we can update the const value .
const obj1={x:10,y:20};

obj1.x=30;
obj1.y=40;
obj1.z=50;  //we can also aditional value
console.log(obj1);

//we can make fully immutable object using Object.seal() and Object.freez().
//Object.seal()- can not add new object can not delete existing object but allow update of existing key value pairs .
const pro={name:"Nidhi",price:100000};
Object.seal(pro);
pro.company="Iphone"; //not add new value
console.log(pro);
delete pro.name;  //this will not delete
console.log(pro);
pro.name="Divya";  //this will update the name
console.log(pro);

//Object.freeze()- can not add new key pair,can not delete and can not update existing key value pair.
const pro1={name:"Iphone 15",price:100000};
Object.freeze(pro1);
pro1.company="Iphone";
console.log(pro1);
delete pro1.name;  //this will not delete
console.log(pro1);
pro1.name="I Phone pro";  //this will not update the name
console.log(pro1);

//we can check the object is seal or freeze using Object.isFrozen() and Object.isSealed();
//if oject is freeze, it will both isFrozen() and isSealed and return true.
Object.isFrozen(pro1);
Object.isSealed(pro);

//Object.PreventExtension()-can not add new key vlaue, we can remove existing key value, we can update key value.
const pro2={name:"Iphone 15",price:100000};
Object.preventExtensions(pro2);
pro2.company="Iphone"; // can not add new value
console.log(pro2);
delete pro2.name;  //this will  delete
console.log(pro2);
pro2.price=200000;  //this will  update the name
console.log(pro2);

//Object.DefineProperty- can not update
const x={a:10};
Object.defineProperty(x,'a',{writable:false});
x.a=90;
console.log(x);

const y={a:10};
Object.defineProperty(y,'a',{configurable:false, writable:false}); //can not delete, can not update,can not add 8
delete y.a;
y.a=90;
console.log(y);








