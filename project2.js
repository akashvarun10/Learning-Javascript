const e = require('cors');

// Random Number Guessing Game
const prompt = require('prompt-sync')(); 

console.log("Welcome to the Random Number Guessing Game!");

// const target = 10 + Math.round(Math.random() * 90); // random number between 10 and 100 { since i want to include 100, i added 10 to the result of the random number between 0 and 90 }
//90 because the range is 100-10 = 90

const target = Math.round(Math.random() * 100); // random number between 0 and 100
let guesses = 0; 
// console.log(target); // for testing purposes

while(true){ 
    guesses++; // increment the number of guesses
const guess = Number(prompt("Guess a number between 0 and 100: ")); //"hello" -> NaN
if (guess > target) {
    console.log("Your guess is too higher!");
} else if (guess < target) {
    console.log("Your guess is too low!");
} else{
    console.log("Congratulations! You guessed the right number!");
    break; // exit the loop
 }
}

console.log("It took you " + guesses + " guesses to get the right number!");


