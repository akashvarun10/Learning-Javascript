// Choose Your Own Adventure Game
const prompt = require('prompt-sync')();

const answer = prompt("Would you like to play a game? (y/n): ");

if(answer === "y"){
    const answer2 = prompt("Would like to go left or right? (left/right): ")
    if(answer2 === "left"){
        console.log("You chose left! and you fall of a cliff. You lose!")
    }else{
        console.log("Nice! You go right and approach a bridge. ")
        const answer3 = prompt("Would you like to cross the bridge, or turn around and find another way(cross/turn)?"
    );

    if(answer3 === "cross"){
        console.log("You cross the bridge and reach the end of the game. You win!")   
    } else{
        console.log("Yoy turn back and trip on a log and fall. You lose!");
    }
}    
} else{
    console.log("That's too bad! Maybe next time!");
}



