"use strict";

const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function playRound(event) {
  let playerSelection = this.textContent;
  const computerSelection = getComputerChoice();
  const result = document.querySelector(".result");

  // Exit early if the selections are equal
  if (playerSelection === computerSelection) {
    result.textContent = "Its a tie!";
    return;
  }

  // Determine the winner of the round
  let winner;
  if (playerSelection === "Rock") {
    winner = computerSelection === "Scissors" ? "player" : "computer";
  } else if (playerSelection === "Paper") {
    winner = computerSelection === "Rock" ? "player" : "computer";
  } else if (playerSelection === "Scissors") {
    winner = computerSelection === "Paper" ? "player" : "computer";
  }

  // Display the round results
  if (winner === "player") {
    result.textContent = `${playerSelection} beats ${computerSelection}!`;
  } else {
    result.textContent = `${computerSelection} beats ${playerSelection}!`;
  }

  updateScores(winner);

  if (playerScore === MAX_SCORE || computerScore === MAX_SCORE) {
    gameOver();
  }
}

function gameOver() {
  const result = document.querySelector(".result");
  result.textContent = playerScore === MAX_SCORE ? "YOU WIN!!" : "YOU LOSE!!";
  stopGame();
}

function updateScores(winner) {
  if (winner === "player") {
    ++playerScore;
  } else if (winner === "computer") {
    ++computerScore;
  }

  const playerScoreElement = document.querySelector(".player-score");
  const computerScoreElement = document.querySelector(".computer-score");
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

function stopGame() {
  buttons.forEach((button) => button.removeEventListener("click", playRound));
}

let playerScore = 0;
let computerScore = 0;
const MAX_SCORE = 5;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", playRound));
