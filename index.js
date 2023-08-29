console.log("Hi");


const options = ["rock", "paper", "scissor"];  //1. Game choices

function getComputerChoice(){ //2. Computer chooses
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function winner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissor") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissor" && computerSelection == "paper")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playertSelection, computerSelection){
    const result = winner(playertSelection, computerSelection);
        if(result == "Tie"){
            return "DRAW!"
    }
        else if(result == "Player"){
            return `Player wins! ${playerSelection} beats ${computerSelection}`
    }
        else if(result == "Computer"){
            return `Computer wins! ${computerSelection} beats ${playertSelection}`
    }

}

const playerSelection = "rock";
const computerSelection = "paper";
console.log(playRound(playerSelection, computerSelection));



//getComputerChoice();
//3. Player chooses
//4. Randomize choices
//5. Who 
//6. Reset game