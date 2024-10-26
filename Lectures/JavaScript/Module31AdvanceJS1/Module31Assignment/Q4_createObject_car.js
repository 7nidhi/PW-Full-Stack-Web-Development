/*
Create an object car with properties brand, model, and a method displayDetails that prints "Brand: [brand],
Model: [model]". Test the method using this keybord.
*/

let car = {
    brand: 'Mercedes-Benz',
    model: 'C-Class',
    displayDetails: function() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}`);
    }
};

car.displayDetails(); 
  