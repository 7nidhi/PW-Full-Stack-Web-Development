/*
Class-  Class is a blueprint on a set of real life entities.

*/
class product{
    name;
    price;
    category;
    dispription;
    rating;

    addToCart(){
        console.log("Product is added");
    }
    removeFromCart(){
        console.log("Product is removed");
    }
    displayProduct(){
        console.log("Product is displayed");
    }
    buyProduct(){
        console.log("Product is bought");
    }
}

/*Constructor-
whenever we create a object using class, the constructor is first method  that is automatically called by JS.
It is alrady available for any class you make. The Default version of this constructor is also called'Default Constructor'.
we can change the implementation of the default  constructor by writing one of your own.h
*/

//Writing your own constructor
class market{
    constructor(){
        console.log("Constuctor made");
    }
}

/*
Objects-
Using classes the final entity that we will develop is called as 'Object'.
There is a keyword in JS called as 'New' which  can help us to create an objet of a class. 
*/
let iphone=new product();
console.log(iphone);