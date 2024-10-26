/*
Create a Map to store contact information (name, age, email, location1 and implement a function to retrieve
contact details by name.
*/
let contact=new Map();

contact.set('Nidhi',{
    age:27,
    email:'nidhipal151@gmail.com',
    location:'Banaras'

});

function getContact(name){
    if(contact.has(name)){
        return contact.get(name);
    }
    else{
        return `Contact Detail of ${name} is not found`;
    }

}

console.log(getContact('Nidhi'));


