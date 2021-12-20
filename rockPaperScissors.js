// Game Variables
const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;
let roundWnner = '';
let roundNumber = 1;

// Game Functions

function computerPlay() {
    return Math.floor(Math.random() * choices.length); 
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        roundWnner = 'Tie';
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock')) {
        roundWnner = 'Player';
        ++playerScore;
    }
    else {
        roundWnner = 'Computer';
        ++computerScore;
    }
    updateInfo();
}

function gameWinner(playerScore, computerScore) {

    if (playerScore > computerScore) {
        alert(`You win the championship, ${playerScore} to ${computerScore}!`);
    }
    else if (computerScore > playerScore){
        alert(`You lose the championship, ${computerScore} to ${playerScore}. Better luck next time.`);
    }
    else {
        alert(`It's a tie, ${computerScore} to ${playerScore}. Solid effort.`);
    }
}

function isGameOver() {
    if (roundNumber === 5 && playerScore > computerScore) {
        alert(`You win the championship, ${playerScore} to ${computerScore}!`);
        resetGame();
    }
    if (roundNumber === 5 && computerScore > playerScore) { 
        alert(`You lose the championship, ${computerScore} to ${playerScore}. Better luck next time.`);
        resetGame();
    }
    if (roundNumber === 5 && computerScore === playerScore) {
        alert(`It's a tie, ${computerScore} to ${playerScore}. Solid effort.`);
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundWnner = '';
    roundNumber = 1;
    updateInfo();
}

function updateInfo() {
    pChoiceOutput.textContent = capitalizeFirst(playerSelection);
    compChoiceOutput.textContent = capitalizeFirst(computerSelection);
    rWinnerOutput.textContent = roundWnner;
    compScoreOutput.textContent = computerScore;
    pScoreOutput.textContent = playerScore;
    currentRoundOutput.textContent = roundNumber;

    if (roundWnner === 'Computer') {
        rWinnerOutput.style.cssText = 'color: var(--computer)';
    }
    if (roundWnner === 'Player') {
        rWinnerOutput.style.cssText = 'color: var(--player)'; 
    }
    if (roundWnner === 'Tie') {
        rWinnerOutput.style.cssText = 'color: grey'; 
    }

}

//UI Variables
const pChoiceOutput = document.querySelector('.pChoiceOutput');
const compChoiceOutput = document.querySelector('.compChoiceOutput');
const pScoreOutput = document.querySelector('.pScoreOutput');
const compScoreOutput = document.querySelector('.compScoreOutput');
const rWinnerOutput = document.querySelector('.rWinnerOutput');
const currentRoundOutput = document.querySelector('.currentRoundOutput');

// UI Functions

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        computerSelection = choices[computerPlay()];
        playRound(playerSelection, computerSelection);
        ++roundNumber;
        updateInfo();
        isGameOver();
        
    });
});

function capitalizeFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

compScoreOutput.textContent = computerScore;
pScoreOutput.textContent = playerScore;
currentRoundOutput.textContent = roundNumber;