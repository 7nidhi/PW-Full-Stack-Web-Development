         //Premitive Data Types

//Number data Types

let age=10;
console.log(age);
console.log(typeof(age));

//String Data type

let name="Nidhi Pal";
console.log(name);
console.log(typeof(name));

//Boolean Data type

let isFollow=true;
console.log(typeof(isFollow));

// Undefine data type

let x;
console.log(typeof(x));

//null data type

let y=null;
console.log(y);
console.log(typeof(y));

//BigInt data type

let z=BigInt(123456678998);
console.log(z);
console.log(typeof(z));

//Symbol data type

let c=Symbol("Nidhi");
console.log(c);
console.log(typeof(c));

//None Premitive Data type
//Object Data type -1. Array  2. Functions

const profile={
    name:"Nidhi pal",
    age:27,
    email:"nidhipal1512gmail.com",
    place:"Pune",
    company:"Infosys Limited",
    role:"Software Engineer"
};

profile["age"]=profile["age"]+1;
console.log(profile["age"]);
console.log(profile);
console.log(typeof(profile));

