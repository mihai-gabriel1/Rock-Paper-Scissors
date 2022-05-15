//1) Create a function named computerPlay that returns a random value of Rock, Paper, Scissors.

function computerPlay() {
  let values = ["ROCK", "PAPER", "SCISSORS"];
  return values[Math.floor(Math.random() * 3)];
}

// 2) Make a func that plays a single round of Rock paper scissors;
// It should take 2 parameters, and return a string that declares the winner so "You loose. Paper beats rock."

let playerscore = 0;
let computerscore = 0;
let winningPart = "";

function playerChoice() {
  let playerSelection = prompt("Rock paper scissors?").toUpperCase();
  return playerSelection;
}
let playerSelection = playerChoice();
let computerSelection = computerPlay();
console.log(computerSelection);
console.log(playerSelection);
// prompt("Rock, paper scissors?");
function playRound(playerSelection, computerSelection) {
  // LOOSING SECTION - START
  console.log(computerSelection);
  console.log(playerSelection);
  if (playerSelection == "ROCK" && computerSelection == "PAPER") {
    console.log("You loose. Paper beats rock!" && computerscore++);
  } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
    console.log("You loose! Scissors beat paper!", computerscore++);
  } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
    console.log("You loose! Rock beats Scissors!", computerscore++);
  }
  //LOOSING SECTION - END

  // WINNING SECTION - STARTS HERE
  else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
    console.log("You won! Rock beats scissors", playerscore++);
  } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    console.log("You won! Paper beats rock!", playerscore++);
  } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
    console.log("You won! Scissors beat paper!", playerscore++);
  }
  // WINNING SECTION - ENDS HERE

  //   TIE SECTION START
  else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
    console.log("Scissors - scissors. It's a tie");
  } else if (playerSelection == "PAPER" && computerSelection == "PAPER") {
    console.log("PAPER-PAPER - TIE");
  } else if (playerSelection == "ROCK" && computerSelection == "ROCK") {
    console.log("ROCK-ROCK - TIE");
  }
  // TIE SECTION END
  console.log(`Computer score - ${computerscore}`);
  console.log(`Player Score - ${playerscore}`);
}
// playRound(playerSelection, computerSelection);

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let gamesplayed = 0;
  let gameWinner = "";

  for (let i = 1; i <= 5; i++) {
    let overallWinner = playRound(playerChoice(), computerPlay());

    if (overallWinner === playerSelection) {
      playerscore++;
    } else if (overallWinner === computerSelection) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    gamesplayed++;
    gameWinner = "Player";
  }
}
game();
