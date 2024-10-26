// Builder Pattern function

class product{
    #name;
    #price;
    #category;

    constructor(builder){
        this.#name=builder.name;
        if(builder.price>0)
            this.#price=builder.price;
        this.category=builder.category;
    }
    displayProduct(){
        console.log(`Product Name: ${this.#name}, Price: ${this.#price}, Category: ${this.#category}`);
    }

    static get Builder(){        //Builder Object passed
        class Builder{
            constructor(){
                this.name="";
                this.price=0;
                this.category="";
                //setting default values
            }
            setName(incomingName){
                this.name=incomingName;
                return this;
            }
            setPrice(incomingPrice){
                this.price=incomingPrice;
                return this;
            }
            build(){
                return new product(this);
            }
        }

    return new Builder();    //when someone calls the Builder getter,they will get a new Builder object. 

    }
}
const p=product.Builder.setName("Iphone").setPrice(150000).build();
p.displayProduct();


/*Object Destructuring
Object is combination of key value pair and associated with one entity, but in destructuring,we can associate
them to indivudul seperte variable.
*/
const Prod={name:"Nidhi",age:26,city:"varanasi"};
const {name,age,city}=Prod;  // Object destructuring
console.log(age);

//Destruturing Object inside another object
const purchasedProd={orderID:1,orderDate:"24/9/2024",...Prod};  //this ... spread operator is destructuring the one object inside another object0.
console.log(purchasedProd);


//To give new name to original key 
const {name: firstname,age:year,city:dis}=Prod;
console.log(firstname); 

//unpack nested Object

const Prod1={discount:500,name:"Iphone 16", price:160000,category:{name:"mobile",categoryID:123}};
const {category :{categoryID}}=Prod1;
console.log(categoryID);

const clone={...Prod1};
console.log(clone);   //make clone of Prod1 using  '... (spread)Operator'

//Rest papmeter is oppsoite of spread operator. this pack objects in one entity.

const {discount, ...productWithoutDiscount}=Prod1;  //this will remove discount and create new object without discount.
console.log(productWithoutDiscount);     