// 1) Write a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

function computerPlay() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  let randomPick = Math.floor(Math.random() * choices.length);
  console.log(choices[randomPick]);
  return choices[randomPick];
}
// computerPlay();
// 2)Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
let overallWinner;
let computerScore = 0;
let playerScore = 0;

function playerSelection() {
  let selection = prompt("Rock, Paper, Scissors?").toUpperCase();
  console.log(selection);
  return selection;
}

function playRound(playerSelection, computerPlay) {
  if (playerSelection === "ROCK" && computerPlay === "PAPER") {
    console.log("You lost, paper beats rock."), computerScore++;
  } else if (playerSelection === "ROCK" && computerPlay === "SCISSORS") {
    console.log("You won, Rock beats Scissors."), playerScore++;
  } else if (playerSelection === "ROCK" && computerPlay === "ROCK") {
    console.log("Both players picked Rock, its a tie.");
  } else if (playerSelection === "SCISSORS" && computerPlay === "ROCK") {
    console.log("You lost, Rock beats Scissors."), computerScore++;
  } else if (playerSelection === "SCISSORS" && computerPlay === "PAPER") {
    console.log("You won, Scissors beat Paper!"), playerScore++;
  } else if (playerSelection === "SCISSORS" && computerPlay === "SCISSORS") {
    console.log("Both players picked Scissors, its a tie.");
  } else if (playerSelection === "PAPER" && computerPlay === "ROCK") {
    console.log("You won, Paper beats Rock!"), playerScore++;
  } else if (playerSelection === "PAPER" && computerPlay === "SCISSORS") {
    console.log("You lost, Scissors beat Paper."), computerScore++;
  } else if (playerSelection === "PAPER" && computerPlay === "PAPER") {
    console.log("Both players picked Paper, it is a tie!");
  } else {
    console.log(
      `You\'ve picked *${playerSelection}*` + " ",
      "which is a wrong input."
    );
  }
}
// playRound(playerSelection(), computerPlay());

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection(), computerPlay());
    console.log(`Computer Score - ${computerScore} `);
    console.log(`Player Score - ${playerScore}`);
  }
  console.log("The game is over!");
  if (computerScore > playerScore) {
    console.log(
      "The overall winner is the AI. Pretty shameful, don't you think?"
    );
  } else if (playerScore > computerScore) {
    console.log("You are the overall winner! Congratulations!");
  }
}
game();
