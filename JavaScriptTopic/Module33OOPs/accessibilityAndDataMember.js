/*
we can hide our data members from being accessed outsside of the class.How?
In JS, we can make our data members private i.e. data member will be accessible for read and write only inside the class.
To make data member private, we just pretend # befor a declaration.
*/
/*class product{
    #name;
    #price;
    #despription;
}
*/
//here name price description is private. we can not access them ouside of the class but use inside the properly.
class product{
    #name;
    #price;
    #despription;

    displayProduct(){
        console.log(this.#name,this.#price,this.#despription);
    }
}
/*Now to make sure that users are able to get and set the values of our data members, we write getter an setter method.
these getter and setter methods will helps us to write validation logic so that no one can allocate random values
to our data members.
*/
