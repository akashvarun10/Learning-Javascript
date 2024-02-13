// Quiz Game 

// mpm install prompt-sync

const prompt = require('prompt-sync')(); // loads the module 
// console.log(value); // printing the value

console.log("Welcome to the Quiz Game!");

let correctAnswers = 0; // variable to keep track of the correct answers
const totalQuestions = 3; // variable to keep track of the total number of questions

const answer1 = prompt("What is the brain of the computer? "); // taking input from user   
const correctAnswer1 = "CPU"; 

if(answer1.toUpperCase() === correctAnswer1){        // comparing the answer and converting the answer to uppercase 
    console.log("Correct Answer");
    correctAnswers += 1; // incrementing the correctAnswers variable by 1
} else {
    console.log("Incorrect Answer");
}


const answer2 = prompt("What is the better a 3090ti or a 4060? "); 
const correctAnswer2 = "3090ti"; 

if(answer2.toLowerCase() === correctAnswer2){        
    console.log("Correct Answer");
    correctAnswers += 1; // incrementing the correctAnswers variable by 1

} else {
    console.log("Incorrect Answer");
}


const answer3 = prompt("What is the recommended amount of RAM in 2023? ");    
const correctAnswer3 = "16GB"; 

if(answer3.toUpperCase() === correctAnswer3){        
    console.log("Correct Answer");
    correctAnswers += 1; // incrementing the correctAnswers variable by 1
} else {
    console.log("Incorrect Answer");
}

const percent = Math.round((correctAnswers / totalQuestions) * 100); // calculating the percentage of correct answers



console.log("You got" , correctAnswers , "questions correct"); // printing the number of correct answers

console.log("You scored" , percent.toString() + "%"); // printing the number of correct answers







