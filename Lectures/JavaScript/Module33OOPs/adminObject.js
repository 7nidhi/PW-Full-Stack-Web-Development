/*
Create a new class called admin which inherit from user. Add n new method called editData to admin that allows
it to edit website.
*/
let DATA="Secret Information";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }

}

class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA="Some new value";

    }
}
let admin1=new Admin("Nidhi","nidhipal151@gmail.com");

admin1.editData();
console.log(DATA);