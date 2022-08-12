function computerPlay() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  let randomPick = Math.floor(Math.random() * choices.length);
  console.log(choices[randomPick]);
  return choices[randomPick];
}
let overallWinner;
let computerScore = 0;
let playerScore = 0;

function playerSelection(val) {
  return val;
}

function playRound(playerSelection, computerPlay) {
  if (playerSelection == "ROCK" && computerPlay == "SCISSORS") {
    playerScore++;
    playerScoreHtml.textContent = playerScore;
    playerPickHtml.textContent = playerSelection;
    cpuPickHtml.textContent = computerPlay;
  } else if (playerSelection == "PAPER" && computerPlay == "ROCK") {
    playerScore++;
    playerScoreHtml.textContent = playerScore;
    playerPickHtml.textContent = playerSelection;
    cpuPickHtml.textContent = computerPlay;
    tieHtml.textContent = "";
  } else if (playerSelection == "SCISSORS" && computerPlay == "PAPER") {
    playerScore++;
    playerScoreHtml.textContent = playerScore;
    playerPickHtml.textContent = playerSelection;
    cpuPickHtml.textContent = computerPlay;
  } else if (playerSelection == "ROCK" && computerPlay == "PAPER") {
    computerScore++;
    computerScoreHtml.textContent = computerScore;
    playerPickHtml.textContent = playerSelection;
    cpuPickHtml.textContent = computerPlay;
  } else if (playerSelection == "PAPER" && computerPlay == "SCISSORS") {
    computerScore++;
    computerScoreHtml.textContent = computerScore;
    playerPickHtml.textContent = playerSelection;
    cpuPickHtml.textContent = computerPlay;
  } else if (playerSelection == "SCISSORS" && computerPlay == "ROCK") {
    computerScore++;
    computerScoreHtml.textContent = computerScore;
    playerPickHtml.textContent = playerSelection;
    cpuPickHtml.textContent = computerPlay;
  } else if (playerSelection === computerPlay) {
    let tieMessage = `Both players picked ${playerSelection}. It's a tie.`;
    console.log(tieMessage);
    tieHtml.textContent = tieMessage;
    playerPickHtml.textContent = playerSelection;
    cpuPickHtml.textContent = playerSelection;
  }
  if (playerSelection !== computerPlay) {
    tieHtml.textContent = "";
  }
}

function game(e) {
  const selectedValue = e.currentTarget.value;
  console.log(e.currentTarget, "button value");
  playRound(playerSelection(selectedValue), computerPlay());
  if (computerScore == 5) {
    const cpuWinner = "The CPU has won. Pretty shameful, don't  you think?";
    console.log(cpuWinner);
    cpuWin.textContent = cpuWinner;
  } else if (playerScore == 5) {
    const playerWinner = "You have won!";
    console.log(playerWinner);
    playerWin.textContent = playerWinner;
  }
  // Disable buttons, dictating the game is over whenever a player reaches the score of 5.
  if (computerScore == 5 || playerScore == 5) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}

const rockBtn = document.querySelector(".rockBtn");
rockBtn.addEventListener("click", game);

const paperBtn = document.querySelector(".paperBtn");
paperBtn.addEventListener("click", game);

const scissorsBtn = document.querySelector(".scissorsBtn");
scissorsBtn.addEventListener("click", game);

const playerScoreHtml = document.querySelector("#playerscore");
const computerScoreHtml = document.querySelector("#computerscore");
console.log(computerScoreHtml);
console.log(playerScoreHtml);

const playerPickHtml = document.querySelector("#playerpick");
const cpuPickHtml = document.querySelector("#cpupick");

const playerWin = document.querySelector("#playerWin");
const tieHtml = document.querySelector("#tieGame");

//refresh page for new game
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => location.reload());

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});
