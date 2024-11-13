/*
Create a class User with 2 property, name and email.It also have methode called viewData(),that allow user to 
view data.
*/
let data="This is secret data";
class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("View Data:",data);
    }
}
let student1=new User("nidhi","nidhipal151@gmail.com");
let student2=new User("saket","saketsaurabh@gmail.com");

console.log(student2);