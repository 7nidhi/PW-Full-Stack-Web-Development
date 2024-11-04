let btn1=document.querySelector("#btn1");
// btn1.onclick= (evt) =>{                       //event object
//     console.log("Button was clicked.");
//     console.log(evt);
//     console.log(evt.type);                    //check the event type =click
//     console.log(evt.target);
// };

btn1.addEventListener("click",(evt) =>{
    console.log("Button was clicked");
    console.log(evt);
    console.log(evt.type);                    
    console.log(evt.target);
})

let div=document.querySelector("div");
div.onmouseover =()=>{
    console.log("You are inside div");
};