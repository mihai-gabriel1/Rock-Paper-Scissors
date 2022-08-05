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
  if (playerSelection == "ROCK" && computerPlay == "PAPER") {
    console.log("You lost, paper beats rock."), computerScore++;
    computerScoreHtml.textContent = computerScore;
    playerPickHtml.textContent = playerSelection;
    cpuPickHtml.textContent = computerPlay;
  } else if (playerSelection == "ROCK" && computerPlay == "SCISSORS") {
    console.log("You won, Rock beats Scissors."), playerScore++;
    playerScoreHtml.textContent = playerScore;
    playerPickHtml.textContent = playerSelection;
    cpuPickHtml.textContent = computerPlay;
  } else if (playerSelection == "ROCK" && computerPlay == "ROCK") {
    console.log("Both players picked Rock, its a tie.");
  } else if (playerSelection == "SCISSORS" && computerPlay == "ROCK") {
    console.log("You lost, Rock beats Scissors."), computerScore++;
    computerScoreHtml.textContent = computerScore;
    playerPickHtml.textContent = playerSelection;
    cpuPickHtml.textContent = computerPlay;
  } else if (playerSelection == "SCISSORS" && computerPlay == "PAPER") {
    console.log("You won, Scissors beat Paper!"), playerScore++;
    playerScoreHtml.textContent = playerScore;
    playerPickHtml.textContent = playerSelection;
    cpuPickHtml.textContent = computerPlay;
  } else if (playerSelection == "SCISSORS" && computerPlay == "SCISSORS") {
    console.log("Both players picked Scissors, its a tie.");
  } else if (playerSelection == "PAPER" && computerPlay == "ROCK") {
    console.log("You won, Paper beats Rock!"), playerScore++;
    playerScoreHtml.textContent = playerScore;
    playerPickHtml.textContent = playerSelection;
    cpuPickHtml.textContent = computerPlay;
  } else if (playerSelection == "PAPER" && computerPlay == "SCISSORS") {
    console.log("You lost, Scissors beat Paper."), computerScore++;
    computerScoreHtml.textContent = computerScore;
    playerPickHtml.textContent = playerSelection;
    cpuPickHtml.textContent = computerPlay;
  } else if (playerSelection == "PAPER" && computerPlay == "PAPER") {
    console.log("Both players picked Paper, it is a tie!");
  }
}

function game(e) {
  console.log(e.currentTarget, "button value");
  const selectedValue = e.currentTarget.value;
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
}

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", game);

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", game);

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", game);

const playerScoreHtml = document.querySelector("#playerscore");
const computerScoreHtml = document.querySelector("#computerscore");
console.log(computerScoreHtml);
console.log(playerScoreHtml);

const playerPickHtml = document.querySelector("#playerpick");
const cpuPickHtml = document.querySelector("#cpupick");

const playerWin = document.querySelector("#playerWin");

//refresh page for new game
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => location.reload());

// Reia ce ai facut cu dragos : 1) id-ul spanurilor si cum ai facut sa fie vizibile pe ecran; 2) cum ai facut ca valoarea butoanelor apasate sa fie vizibila in
// clip eventlistener
// Div-uri selectii jucator, cpu
// evidentierea butonului apasat
// clip react

// RESETSCORE FUNCTION WHEN SCORE REACHES 5;
// TOT ATUNCI SI MESAJUL CU OVERALL WINNER SA FIE AFISAT,
// NU DEAMPULEA CUM E ACUM

// AS STATED IN THE REVISITING PAGE, TRY TO CHANGE ALL THE
//  CONSOLE LOGS INTO DIVS, DISPLAYING INTO THE DOM
// REFACTOR THE IFS FROM COMPUTERPLAY VS SELECTEDVALUE
// SA FIE CODUL CAT MAI SCURT

// SI DUPA, VEZI CLIPURILE DE LA DRAGOS!
