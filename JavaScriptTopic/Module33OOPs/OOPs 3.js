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