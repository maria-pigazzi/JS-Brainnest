function computerPlay() {
  const computerSelection = ["rock", "paper", "scissors"];
  return computerSelection [Math.floor(Math.random() * computerSelection.length)];
};

function playRound(playerSelection, computerSelection) {
  if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
    return  `You win! ${playerSelection} beats ${computerSelection}`;
  } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection === computerSelection) {
    return "Looks like a draw!";
  }
};

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
    const computerSelection = computerPlay();
    // console.log(computerSelection);
    // console.log(playerSelection);
    console.log(playRound(playerSelection, computerSelection));
  }
};

game()
