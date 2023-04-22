const buttons = document.querySelectorAll('.choices');
const reset = document.querySelector('#reset');
const buttonsReset = document.querySelector ('#buttons');

let playerScoreDisplay = document.getElementById('player-score');
let computerScoreDisplay = document.querySelector('#computer-score');
let resultsDisplay = document.querySelector("#results");
const gameOver = document.getElementById('game-over');

let player;
let computer;
let result;
let playerScore = 0;
let computerScore = 0;


const options = ['Rock','Paper','Scissors'];


//reset scores and results
reset.addEventListener('click', resetScores);

function resetScores(){
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.innerText = 0;
    computerScoreDisplay.innerText = 0;
    resultsDisplay.innerText = "";
    buttonsReset.style.display = 'inline-block';
    gameOver.style.display = 'none';
}

//player button input
function getPlayerChoice(){
    buttons.forEach((button) => {
    button.addEventListener('click', ()=> {
       player = button.textContent;
       reset.style.display = "inline-block";
       computer = getComputerChoice();
       checkWinner(player, computer);
       resultsDisplay.innerHTML = result;
    });
    });
}
getPlayerChoice();


//computer random choice
function getComputerChoice(){
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

//check winner
function checkWinner(player, computer){
    if(player == computer){
        result = 'It\'s a tie!';
    }else if(
        (player == 'Rock' && computer == 'Scissors') ||
        (player == 'Paper' && computer == 'Rock') ||
        (player == 'Scissors' && computer == 'Paper')
    ){
        result = `You win! ${player} beats ${computer}`;
        playerScoreDisplay.innerHTML = playerScore += 1;
    }else {
        result = `You Lose. ${computer} beats ${player}`;
        computerScoreDisplay.innerHTML = computerScore += 1;
    }
    if (playerScore >= 5){
        gameOver.innerHTML = 'Game Over! You Win!'
        gameOver.style.display = "inline-block";
        buttonsReset.style.display = 'none';       
      }else if(computerScore >= 5){
        gameOver.style.display = "inline-block";
        gameOver.innerHTML = 'Game Over! Computer Wins.'
        buttonsReset.style.display = 'none';
      }
    
}



