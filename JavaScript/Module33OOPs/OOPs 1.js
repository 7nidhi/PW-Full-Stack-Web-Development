/*
Class-  Class is a blueprint on a set of real life entities.

*/
class product{
    //price;
    //name;
    //category;
    //dispription;
    //rating;
    constructor(productName,productPrice,productCategory,producteDecription,productRating){
        this.name=productName;
        this.price=productCategory;
        this.category=productCategory;
        this.dispription=producteDecription;
        this.rating=productRating;
    }

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
let iphone=new product("Iphone",150000,"IoS","This is very famous phone",4.3);
console.log(iphone);

/*How new keyword work-
>it creates a brand new plain and absolutelt empty object.
> it calls gthe constructor of the class and passes the newly created object(not as parameterer)
but inside a keyowrd called as 'this '.So contructor automatically has access to this keyword and when we call new
,this keyword has access to the plain object created in step 1 and constuctor now can use this keyoword inside it.
and then whatever is logic of constructor it is executed.
> new triggers everything needs to be done for prototype to work.
> Now , if from a constactor an object is manually returned then this manual returned object is stored in the 
called varible, otherwise in any case i.e either we dont return anything or return something apart from object,
constuctor does not  care about it and return the value inside this keyword.
*/

/* This keyword in JS-
>this as keywordis available  to be accessed in any fucntion or even outside any function, and in class as well.
>if we can use this keyowrd anywhere, then whats the value of stored inside this?
--in most of the cases this refers to the call site.
>what is call site?
--Call site can be an obeject or any position or may be even new keyword. it refers to the entity which is calling 
this keyword.
>"Note"-It has an exception, this keyword will not refer to call site if it used insode an arrow function.
In case of arrow function, this is resolved using lexical scoping.
let obj={
    x=10;
    y=30;
    fn:fucntion(){
       const arrow=()=>{
        console.log(this.x,this.y);
        }
        arrow();
    }
}

--In this code, this present inside the arrow fucntion, hence we will resolve it lexically.
=Is this defined in the scope of arrow function? No.
=we go one scope up, i.e. inside function fn.
=is this defineed inside fn?yes because fn is a normal fucntion,we have a defination of this inside it,
which is call site.
=who is call site? Obj object, which is responsible to trigger fn is the call site.
=hence this refer to obk object and when we call arrow function we get output as 10,30.
That means , when we make new object using New keyword,then new keyowrd creates a plain object and 
this plain object is the call site for the constructor hence this keyword refers to the plain object altogether.
*/


