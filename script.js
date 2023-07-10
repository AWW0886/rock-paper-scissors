//const rpsChoice = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
//const btn = document.querySelector('button');

const player = document.querySelector('#player-score');
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector('#computer-score');
computer.textContent = `Computer Score: ${computerScore}`;

function game() {
    //for (let i = 0; i < 5; i++) {

    function getComputerChoice() {
        if (playerChoice === 'fire') {
            let rpsChoice = ['rock', 'paper', 'scissors', 'water balloon'];
            return rpsChoice[Math.floor(Math.random() * rpsChoice.length)];    
        
        } else if (playerChoice === 'rock' || 'paper' || 'scissors') {
            let rpsChoice = ['rock', 'paper', 'scissors'];
            return rpsChoice[Math.floor(Math.random() * rpsChoice.length)];
        }
    }
    //console.log(getComputerChoice());

    function playRound(playerChoice, computerChoice) {
        //player.textContent = `Player Score: ${playerScore}`;
        //computer.textContent = `Computer Score: ${computerScore}`;

        if (playerChoice === computerChoice) {
            alert(`Tie! ${playerChoice} = ${computerChoice}`);
            //alert(playerChoice + ' = ' + computerChoice);
        
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper') ||
            (playerChoice === 'fire' && computerChoice !== 'water balloon')
        ) {
            alert(`Winner! ${playerChoice} > ${computerChoice}`);
            //alert(playerChoice + ' > ' + computerChoice);
            playerScore++;
            player.textContent = `Player Score: ${playerScore}`;


            if (playerScore === 5) {
                alert("You win!");
                player.textContent = `Player Score: ${playerScore}`;
            }

        } else if (
            (playerChoice === 'fire' && computerChoice === 'water balloon')
        ) {
            alert('LOSER!');
            alert("Aww... Well played, Phoebe Buffay!");
            computerScore++;
            computer.textContent = `Computer Score: ${computerScore}`;

            if (computerScore === 5) {
                alert("You lose!");
                computer.textContent = `Computer Score: ${computerScore}`;
            }
            
        } else {
            alert(`LOSER! ${playerChoice} < ${computerChoice}`);
            computerScore++;
            computer.textContent = `Computer Score: ${computerScore}`;

            if (computerScore === 5) {
                alert("You lose!");
                computer.textContent = `Computer Score: ${computerScore}`;  
            }
        } 
    }

    //const playerChoice = prompt().toLowerCase();
    const computerChoice = getComputerChoice();

    //console.log(playerChoice);  
    console.log(computerChoice);   
    console.log(playRound(playerChoice, computerChoice));
    console.log(playerScore);
    console.log(computerScore);
    //}
}

//console.log(game());

//const buttons = document.querySelectorAll('button');
//const btn = document.querySelector('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        console.log(playerChoice);
        game(playerChoice);
    });
});

//const player = document.querySelector('#player-score');
//player.textContent = `Player Score: ${playerScore}`;

//const computer = document.querySelector('#computer-score');
//computer.textContent = `Computer Score: ${computerScore}`;


// Make buttons
// Add event listeners to buttons
// Increase score
// Display score (add div)
// End game function when score === 5