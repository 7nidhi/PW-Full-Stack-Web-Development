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
    getPrice(){    //getter method to get  new value
        return this.#price;
    }   
    setPrice(p){       //setter method to set or update new value
        if(p>0){
            this.#price=p;
        }
        else
        {
            console.log("Invalid Price");
        }
    } 
    
}
/*Now to make sure that users are able to get and set the values of our data members, we write getter an setter method.
these getter and setter methods will helps us to write validation logic so that no one can allocate random values
to our data members.
*/
/* there is an alternative way to define a getter and setter method in jS. we can use the get and set keyowrd to handle this.*/
class Prod{
    #des;
    get des(){
        return this.#des;
    }
    set des(d){
        if(d.length===0){
            console.log("invalid des");
            return;
        }
        this.#des=d;

    }

}
// How to call them
const iphone= new Prod();
iphone.des="Something";
console.log(iphone.des);

//iphone.des="Something" will help us to access the setter and pass something as argument to the setter function.
// iphone.des will help us to call the getter method defined.

/*   Class as wrappers on Fucntion
>In js every class we write is  wrapper over funtion, in older version of jS 'class' keyowrd does not exist.
hence due to  do the blue print we use have only fucntions.

fucntion product(n,p,d){
    this.name=n;
    this.price=p;
    this.description=d;

    this.displayProduct=fucntion(){
    console.log("Name",this.name,"Price",this.price,"description",this.description)
    }
}
>Now the above product fucntion acts as Fucton Constuctor, here it takes a few parameters and uses 'this' keyowrd
to assign them.To call this constructor we do:

let iphone=new Product("Iphone16",150000,"Apple Iphone");

> Now here we are calling fucntion constructor of product with new keyword.and new keyowrd will do 4 things-
1-create an empty object.
2- assign 'this' keyword in the fucntion constructor to the new empty object and call the constructor.
3-Do prototyping.
4-If the constructor returns a new object manually, reuturn the same from the cosntructor else if no object is
manually returned or a non object vlaue is returned then we return this from  the construtor.
>In step 2, when we use the constructor , we assign the data member like name ,price,description and member
fucntion like 'displayProduct'.
*/