// Rock Paper Scissors Game
const prompt = require('prompt-sync')();

console.log("Welcome to the Rock Paper Scissors Game!");

let wins = 0;
let losses = 0;
let ties = 0;
while(true){
    
const playerchoice = prompt("Enter rock, paper, or scissors (or q to quit): ");
if(playerchoice.toLowerCase() === "q"){
    break;
}

if(
    playerchoice !== "rock" && 
    playerchoice !== "paper" && 
    playerchoice !== "scissors"
    ){ // checking 3 conditions in one line
    console.log("Enter a valid choice!");
    continue; 
} 

const choices = ["rock", "paper", "scissors"]; // index 0: rock, index 1: paper, index 2: scissors
const randomIndex = Math.round(Math.random() * 2); // random number between 0 and 2
const computerChoice = choices[randomIndex];
console.log("The computer chose :", computerChoice);

if(computerChoice === playerchoice){
    console.log("It's a tie!");
    ties++;
}else if(
(playerchoice === "paper" && computerChoice === "rock" ) || 
(playerchoice === "rock" && computerChoice === "scissors") || 
(playerchoice === "scissors" && computerChoice === "paper")
){
    console.log("You win!");
    wins++;
}else{
    console.log("You lose!");
    losses++;
}
}

console.log("Wins:", wins, "Losses:", losses, "Ties:", ties); 