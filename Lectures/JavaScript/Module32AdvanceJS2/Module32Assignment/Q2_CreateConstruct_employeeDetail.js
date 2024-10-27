/*
Create a constructor Employee that inherits from the Person constructor of problem 1. Add an additional
property designation and a method getDetails to display the employee details.
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

function Employee(name, age, designation) {
    
    Person.call(this, name, age);
    
    this.designation = designation;
    
    this.getDetails = function() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`);
    };
}

const employee1 = new Employee("Nidhi", 27, "Software Engineer");
employee1.sayHello();      
employee1.getDetails();      
