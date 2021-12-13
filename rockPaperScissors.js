// This is a rock paper scissors game.

const choices = ['ROCK', 'PAPER', 'SCISSORS']; // Obviously the choice the NPC/player can make.

// Plays 5 games, and declares an overall winner.
function game() {

    let playerScore = 0; // Cumulative player score.
    let computerScore = 0; // Cumulative PC score.

    for (let i = 1; i < 6; i++){ //Loops the gameplay 5 times.

        let computerSelection  = choices[computerPlay()]; // Stores the NPC play.
        //let playerChoice;  //= prompt('Make your choice (Rock, Paper, Scissors): ', ''); // prompts user for their play
        
        // Prompts the user for their play, and asks again if they input anything but rock, paper, scissors.
        function playerPlay() {
            playerChoice  = prompt('Make your choice (Rock, Paper, Scissors): ',); // prompts user for their play
            playerSelection = playerChoice.toUpperCase(); // stores the user play in uppercase to facilitate comparison
            
            // if the player inputs one of the 3 acceptable choices, move on, otherwise tell them they messed up and ask again.
            if (playerSelection === 'ROCK' || playerSelection === "PAPER" || playerSelection === "SCISSORS"){
            }
            else{
                console.log(`${playerChoice} is not acceptable.`);
                playerPlay(); //call the function again, so the player can make a valid choice.
            }
        }

        // The computer randomly picks rock, paper, or scissors
        function computerPlay() {
            return Math.floor(Math.random() * choices.length); // Picks a random number from however many choices exist in the array <choices>
        }

        // Plays a round of the game. Compares the 2 choices made.
        function playRound (playerSelection, computerSelection) {
    
            // if both choices are the same, a tie is declared.
            if (playerSelection === computerSelection) {
                console.log(`Your Choice: ${playerChoice}; ${playerSelection} ties with ${computerSelection}! Try again!`);;
            }
            // these are the win states.
            else if ( (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') || (playerSelection === 'PAPER' && computerSelection === 'ROCK')) {
                console.log(`Your Choice: ${playerChoice}; You Win! ${playerSelection} beats ${computerSelection}!`);
                ++playerScore; // Player score increases.
            }
            // if you don't make a choice, don't win, or don't tie, then you lose.
            else {
                console.log(`Your Choice: ${playerChoice}; You Lose! ${computerSelection} beats ${playerSelection}.`);
                ++computerScore; // PC score increases.
            }
            
            console.log(`ROUND ${i}/5 - You: ${playerScore}; PC: ${computerScore}`); // Report the current scores

        }
        playerPlay(); // Asks the player's choice
        playRound(playerSelection, computerSelection); // Starts a game round.
    
    }

    // Delcares the champion of the game.
    function gameWinner(playerScore, computerScore) {
        // Player has a higher score and wins.
        if (playerScore > computerScore) {
            console.log(`You win the championship, ${playerScore} to ${computerScore}!`);
        }
        // PC has a higher score, player lsoes.
        else if (computerScore > playerScore){
            console.log(`You lose the championship, ${computerScore} to ${playerScore}. Better luck next time.`);
        }
        // A tie is the only other option.
        else {
            console.log(`It's a tie, ${computerScore} to ${playerScore}. Solid effort.`);
        }
    }
    gameWinner(playerScore, computerScore); // Report the final results.
}

game();



//console.log(computerSelection); // displays the item from the array matching the random number picked in the function.
