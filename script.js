"use strict";

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function playRound(playerSelection, computerSelection) {
  // Exit early if the selections are equal
  if (playerSelection === computerSelection) {
    console.log("Its a Tie!");
    return "tie";
  }

  // Determine the winner of the round
  let winner;
  if (playerSelection === "rock") {
    winner = computerSelection === "scissors" ? "player" : "computer";
  } else if (playerSelection === "paper") {
    winner = computerSelection === "rock" ? "player" : "computer";
  } else if (playerSelection === "scissors") {
    winner = computerSelection === "paper" ? "player" : "computer";
  }

  // Display the round results
  if (winner === "player") {
    console.log(`${playerSelection} beats ${computerSelection}!`);
  } else {
    console.log(`${computerSelection} beats ${playerSelection}!`);
  }

  return winner;
}

function getGameOutcome(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return "You Win!!";
  } else if (playerScore < computerScore) {
    return "You Lose!";
  } else {
    return "Its a Tie!";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; ++i) {
    let playerSelection = prompt("What do you choose?");
    if (!playerSelection || !choices.includes(playerSelection)) {
      playerSelection = "rock";
    } else {
      playerSelection.toLowerCase();
    }

    const computerSelection = getComputerChoice();

    const winner = playRound(playerSelection, computerSelection);
    if (winner === "player") {
      ++playerScore;
    } else if (winner === "computer") {
      ++computerScore;
    }

    console.log(
      `Current Score => You: ${playerScore}, Computer: ${computerScore}`
    );
  }

  console.log(getGameOutcome(playerScore, computerScore));
}

game();
