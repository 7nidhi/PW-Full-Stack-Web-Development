/*Create a game where you can start with any random game number.Ask user to keep guessing the game number
until the user enter correct   number.
*/
let gameNumber=25;
let guessNumber=prompt("Enter the Game Number");
while(guessNumber != gameNumber){
    guessNumber=prompt("You guessed the wrong Number,Please guess again");
    
}

alert("Congratulations, You won the Game!!!!");
