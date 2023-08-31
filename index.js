console.log("Hi");


const options = ["rock", "paper", "scissors"];  

function getComputerChoice(){ 
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function winner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = winner(playerSelection, computerSelection);
        if(result == "Tie"){
            return "DRAW!"
    }
        else if(result == "Player"){
            return `Player wins! ${playerSelection} beats ${computerSelection}`
    }
        else if(result == "Computer"){
            return `Computer wins! ${computerSelection} beats ${playerSelection}`
    }

}

// const playerSelection = "rock";
// const computerSelection = "paper";
// console.log(playRound(playerSelection, computerSelection));

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock, paper or scissors");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}


function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Lets play!")
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (winner(playerSelection, computerSelection) == "Player"){
            scorePlayer++;
        } 
        else if(winner(playerSelection, computerSelection) == "Computer"){
            scoreComputer++;
        }
    }
    console.log("Game Over!")
    if(scorePlayer > scoreComputer){
        console.log("Player Wins!");
    }
    else if(scoreComputer > scorePlayer){
        console.log("Computer Wins!");
    }
    else{
        console.log("DRAW!");
    }

}

game()



//getComputerChoice();
