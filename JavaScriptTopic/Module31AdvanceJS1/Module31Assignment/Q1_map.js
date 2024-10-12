/*
Create a Map in JavaScript and perform the follo9ing operations8
4 Add key-value pairs to the Map
4 Check if a specific key exists
4 Retrieve the value associated with a given key
4 Iterate through all key-value pairs.
*/

let myMap = new Map();

myMap.set('name', 'Nidhi');
myMap.set('age', 27);
myMap.set('city', 'Banaras');

console.log(myMap.has('age')); 

console.log(myMap.get('name'));
console.log(myMap.get('age')); 


for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`);  

}
