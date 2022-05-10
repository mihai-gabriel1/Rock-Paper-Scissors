//1) Create a function named computerPlay that returns a random value of Rock, Paper, Scissors.

function computerPlay() {
  let values = ["ROCK", "PAPER", "SCISSORS"];
  return values[Math.floor(Math.random() * 3)];
}
console.log(computerPlay());

// 2) Make a func that plays a single round of Rock paper scissors;
// It should take 2 parameters, and return a string that declares the winner so "You loose. Paper beats rock."

let playerscore = 0;
let computerscore = 0;
let winningPart = "";

let playerSelection = "ROCK";
console.log(playerSelection);
let computerSelection = computerPlay();
function playRound(playerSelection, computerSelection) {
  // LOOSING SECTION - START
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
  console.log("Computer score - ", computerscore);
  console.log("Player Score -", playerscore);
}
playRound(playerSelection, computerSelection);

// Rezolva afisarea scorului corect, cat si intarzierea mesajului, eg rock beats scissors dar in consola este afisat rock rock;
// intreaba daca poate fi vorba de vreun bug la dev tools si se intampla asta;
// referitor la functia game, vezi cum faci promptul cand incepe jocul
