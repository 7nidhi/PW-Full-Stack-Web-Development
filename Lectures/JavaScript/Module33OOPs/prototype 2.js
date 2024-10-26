//Call,apply and bind fucntion can helpt to manupulate the value pointed by 'this' keyowrd

//Call() function-control and change the value of this keyowrd inside a function.takes n mumber of argument
//not oworked with arrow function
const obj={
    firstName:'Sanket',
    greet:function(welcomeMessage,prompt){
        console.log("Hello, My name is", this.firstName,welcomeMessage,prompt)
    }
}
console.log(obj.greet("How are you","How can i help you"));
const newObj={firstName:'Sarthak'}
console.log(obj.greet.call(newObj,"How are you","How can i help you"));  //using call() fucntion
console.log(obj.greet.call()); ///this will refer global object if will dont put parameter


//Apply fucntion-this works same as call function but it takes only 2 argument

console.log(obj.greet.apply(newObj,["How are you","How can i help you"])); 

//Bind() function
f=obj.greet.bind(newObj);  //this f() will create new fucntion
f("hello","hi");
console.log(f);
console.log(obj.greet());
console.log(f());

//create() function-


//Inheritance
class Event{
    constructor(dateOfEvent){
        this.dateOfEvent=dateOfEvent;
    }
    bookEvent(){
        console.log("Book Event");
    }
}
class Movie extends Event{
    constructor(movieName,movieDate){
        super(movieDate);
        this.movieName=movieName;
        
    }
}
let dp=new Movie("deadpool 3","25/07/2024");
console.log(dp);