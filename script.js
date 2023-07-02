const rpsChoice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    return rpsChoice[computerChoice];
}

console.log(getComputerChoice());