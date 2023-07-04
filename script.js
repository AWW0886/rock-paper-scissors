//const rpsChoice = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {

    function getComputerChoice() {
        if (playerChoice === "fire") {
            let rpsChoice = ['rock', 'paper', 'scissors', 'water balloon'];
            return rpsChoice[Math.floor(Math.random() * rpsChoice.length)];    
        } else if (playerChoice === 'rock' || 'paper' || 'scissors') {
            let rpsChoice = ['rock', 'paper', 'scissors'];
            return rpsChoice[Math.floor(Math.random() * rpsChoice.length)];
        }
    }
    //console.log(getComputerChoice());

    function playRound(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            alert('Tie!');
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper') ||
            (playerChoice === 'fire' && computerChoice !== 'water balloon')
        ) {
            alert('Winner!');
            playerScore++;
        } else if (
            (playerChoice === 'fire' && computerChoice === 'water balloon')
        ) {
            alert('LOSER!');
            alert("Aww... Well played, Phoebe Buffay!");
            computerScore++;
        } else {
            alert('LOSER!');
            computerScore++;
        } 
    }

    const playerChoice = prompt().toLowerCase();
    const computerChoice = getComputerChoice();

    console.log(playerChoice);  
    console.log(computerChoice);   
    console.log(playRound(playerChoice, computerChoice));
    console.log(playerScore);
    console.log(computerScore);
    }
}

console.log(game());