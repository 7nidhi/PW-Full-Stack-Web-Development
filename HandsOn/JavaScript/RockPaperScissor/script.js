/*Rock Paper Scissor*/

let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=() =>{                         //To generate random choice form computer
    const option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
};

const drawGame=()=>{
    console.log("Game is draw.");
    msg.innerText="Game is draw.Play again.";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin)=>{
    if(userWin===true){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="You win";
        msg.style.backgroundColor="Green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText="You loss";
        msg.style.backgroundColor="Red";
    }
};

const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    const compChoice=genCompChoice();
    console.log("Comp choice=",compChoice);
    
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //Scissor,Paper
            if(compChoice==="paper"){
                userWin=false;
            }else{
                userWin=true;
            }
        }
        else if(userChoice==="paper"){
            //Rock, Scissor
            if(compChoice==="scissors"){
                userWin=false;
            }else{
                userWin=true;
            }
        }
        else{
            //Rock,Paper
            if(compChoice==="rock"){
                userWin=false;
            }
            else{
                userWin=true;
            }
        }
        showWinner(userWin);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
