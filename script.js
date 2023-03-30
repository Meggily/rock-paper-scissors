const options = ['rock','paper','scissors'];


//computer random choice
function getComputerChoice(){
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

//check winner
function checkWinner(playerChoice, computerChoice){
    if(playerChoice == computerChoice){
        return 'tie';
    }else if(
        (playerChoice == 'rock' && computerChoice == 'scissors') ||
        (playerChoice == 'paper' && computerChoice == 'rock') ||
        (playerChoice == 'scissors' && computerChoice == 'paper')
    ){
        return 'player';
    }else {
        return 'computer';
    }
}

function playRound(playerChoice, computerChoice){
    const result = checkWinner(playerChoice, computerChoice);
    if(result == 'tie'){
        return "It's a tie!"
    }
    else if(result == 'player'){
        return `You won! ${playerChoice} beats ${computerChoice}`
    }
    else {
        return `You Lose. ${computerChoice} beats ${playerChoice}`
    }
}

//player choice
function getPlayerChoice(){
    let validateInput = false;
    while(validateInput == false){
        const choice = prompt('Please enter your choice.', 'rock, paper or scissors');
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validateInput = true;
            return choiceInLower;
        }

    }
} 

function game(){
    let playerScore = 0;
    let computerScore = 0;
    console.log('Welcome!')
    for (let i = 0; i < 5; i++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
        if (checkWinner(playerChoice, computerChoice) == 'player'){
            playerScore++;
        } 
        else if (checkWinner(playerChoice, computerChoice) == 'computer'){
            computerScore++;
        }
    
    }
    console.log('Game Over')
    if (playerScore > computerScore){
        console.log('You are the winner!');
    }
    else if (playerScore < computerScore){
        console.log('Computer is the winner.');
    }
    else {
        console.log('There are no winners!');
    }
}

 game()



