//to get the attribute value
let div=document.querySelector("div");
console.log(div);

let id=div.getAttribute("id");
console.log(id);

let ids=div.getAttribute("name");
console.log(ids);

let par=document.querySelector("p");
console.log(par.getAttribute("class"));

//To set the attribute the value

console.log(par.setAttribute("class","newPar"));

//To change the style of nodes

let divs=document.querySelector("div");
console.log(divs);
divs.style.backgroundColor="pink";
divs.style.fontSize="30px";
divs.innerText="HEllo Div";

//Add new element, 1-create element 2-add element

let newbtn=document.createElement("button");
newbtn.innerText="Click Me";
console.log(newbtn);

//Add at the end of node (inside) -append()

divs.append(newbtn);

//Add at the start of node (inside)-prepend()
divs.prepend(newbtn);

//Add at the before of node (outside)
divs.before(newbtn);

//Add at the after of node (outside)
divs.after(newbtn);

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i> Hi, i am here. </i>";
document.querySelector("body").prepend(newHeading);

//delete  node

let par1=document.querySelector("p");
par1.remove();
