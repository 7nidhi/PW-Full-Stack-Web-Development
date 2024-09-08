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
