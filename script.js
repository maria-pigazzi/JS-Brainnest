const symbols = ["rock", "paper", "scissors"];

function computerPlay() {
  let randomNumber = (Math.floor(Math.random() * symbols.length))
  if (randomNumber == 0) {
    return "rock"
  } else if (randomNumber == 1) {
    return "paper"
  } else if (randomNumber == 2) {
    return "scissors"
  }
};

console.log(computerPlay());


let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
console.log(playerSelection);

let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
    return  `You win! ${playerSelection} beats ${computerSelection}`;
  } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === 'rock')) {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === computerSelection) {
    return "Looks like a draw!";
  }
};



let i = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
};

console.log(game());
