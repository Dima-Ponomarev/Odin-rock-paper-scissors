const computerPlay = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0: return "Rock"; 
        case 1: return "Paper"; 
        case 2: return "Scissors"; 
    }
}

const playRound = (playerSelection, computerSelection) => {
    const formattedPS = playerSelection.toLowerCase();
    const formattedCS = computerSelection.toLowerCase();

    if (formattedPS === formattedCS){
        return "It's a tie!";
    } else if (formattedPS === "rock" && formattedCS === "paper"){
        return "You Lose! Paper beats Rock";
    } else if (formattedPS === "rock" && formattedCS === "scissors"){
        return "You Win! Rock beats Scissors";
    } else if (formattedPS === "paper" && formattedCS === "rock"){
        return "You Win! Paper beats Rock";
    } else if (formattedPS === "paper" && formattedCS === "scissors"){
        return "You Lose! Scissors beats Paper";
    } else if (formattedPS === "scissors" && formattedCS === "paper"){
        return "You Win! Scissors beats Paper";
    } else if (formattedPS === "scissors" && formattedCS === "rock"){
        return "You Lose! Rock beats Scissors";
    } 

}

