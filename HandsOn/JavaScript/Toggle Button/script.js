/*
Create a Toggle Button that changes the screen to dark mode when clicked and light mode when again clicked.
*/

let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currMode="Light";
modeBtn.addEventListener("click",() =>{
    if(currMode==="Light"){
        currMode="Dark";
        body.classList.add("dark");
        body.classList.remove("light");

        
    }
    else{
        currMode="Light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);

});