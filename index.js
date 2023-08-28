console.log("Hi");


const options = ["rock", "paper", "scissor"];  //1. Game choices

function getComputerChoice(){ //2. Computer chooses
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice);
}
getComputerChoice();
    //3. Player chooses
//4. Randomize choices
//5. Who 
//6. Reset game