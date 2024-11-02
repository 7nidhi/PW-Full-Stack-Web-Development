/*
Create a h2 heading element with text "hello Java Script". and Append "From PW skills" to this text
using JS.
*/

let h2=document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText=h2.innerText+" from PW Skills.";


/*
Create 3 divs common class name "box".access them and add some unique text to each of them.
*/

let divs=document.querySelectorAll(".box");
console.dir(divs[0]);
// divs[0].innerText="New value1";
// divs[1].innerText="New value2";
// divs[2].innerText="New value3";

let idx=1;
for(div of divs){
    div.innerText=`new value ${idx}`;
    idx++;
}