let playerScore = 0;
let computerScore = 0;
let gameRound = 1;

const buttons = document.querySelectorAll('button');

const player = document.querySelector('#player-score');
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector('#computer-score');
computer.textContent = `Computer Score: ${computerScore}`;

const round = document.querySelector('#round');
round.textContent = `Round: ${gameRound}`;

const result = document.querySelector('#result');

function disableButtons() {
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

function game() {

    function getComputerChoice() {
        if (playerChoice === 'fire') {
            return 'water balloon';   
        
        } else if (playerChoice === 'rock' || 'paper' || 'scissors') {
            let rpsChoice = ['rock', 'paper', 'scissors'];
            return rpsChoice[Math.floor(Math.random() * rpsChoice.length)];
        }
    }

    function playRound(playerChoice, computerChoice) {

        if (playerChoice === computerChoice) {
            alert(`Tie! ${playerChoice} = ${computerChoice}`);
            gameRound++;
            round.textContent = `Round: ${gameRound}`;
        
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            alert(`Winner! ${playerChoice} > ${computerChoice}`);
            playerScore++;
            player.textContent = `Player Score: ${playerScore}`;
            gameRound++;
            round.textContent = `Round: ${gameRound}`;

            if (playerScore === 5) {
                alert("You win the game!");
                player.textContent = `Player Score: ${playerScore}`;
                result.textContent = 'You won!';
                disableButtons();
            }

        } else if (
            (playerChoice === 'fire' && computerChoice === 'water balloon')
        ) {
            alert('Does it beat water balloon?')
            alert('"Aww... Well played, Phoebe Buffay!" -No points added!');
            gameRound++;
            round.textContent = `Round: ${gameRound}`;

            if (computerScore === 5) {
                alert("You lose the game!");
                computer.textContent = `Computer Score: ${computerScore}`;
                result.textContent = 'You lost!';
                disableButtons();
            }
            
        } else {
            alert(`LOSER! ${playerChoice} < ${computerChoice}`);
            computerScore++;
            computer.textContent = `Computer Score: ${computerScore}`;
            gameRound++;
            round.textContent = `Round: ${gameRound}`;

            if (computerScore === 5) { 
                alert("You lose the game!");
                computer.textContent = `Computer Score: ${computerScore}`;
                result.textContent = 'You lost!';
                disableButtons();  
            }
        } 
    }

    const computerChoice = getComputerChoice();
  
    console.log(computerChoice);   
    console.log(playRound(playerChoice, computerChoice));
    console.log(playerScore);
    console.log(computerScore);
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        console.log(playerChoice);
        game(playerChoice);
    });
});


// Make buttons
// Add event listeners to buttons
// Increase score
// Display score (add div)
// End game function when score === 5