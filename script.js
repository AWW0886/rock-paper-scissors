//const rpsChoice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    //const computerChoice = Math.floor(Math.random() * rpsChoice.length);
    //return rpsChoice[computerChoice];
    const rpsChoice = ['rock', 'paper', 'scissors'];
    return rpsChoice[Math.floor(Math.random() * rpsChoice.length)];
}

//console.log(getComputerChoice());

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        alert("Tie!");
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        alert("Winner!");
    } else {
        alert("LOSER!");
    }  
}
    const playerChoice = 'rock';
    const computerChoice = getComputerChoice();

console.log(computerChoice);    
console.log(playerChoice);    
console.log(playRound(playerChoice, computerChoice));