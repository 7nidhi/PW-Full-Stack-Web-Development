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


