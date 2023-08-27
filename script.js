"use strict";

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function playRound(playerSelection, computerSelection) {
  let result;

  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "rock":
        result = "Its a Tie!";
        break;
      case "paper":
        result = "You Lose! Paper beats Rock";
        break;
      case "scissors":
        result = "You Win! Rock beats Scissors";
        break;
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "rock":
        result = "You Win! Paper beats Rock";
        break;
      case "paper":
        result = "Its a Tie!";
        break;
      case "scissors":
        result = "You Lose! Scissors beats Paper";
        break;
    }
  } else if (playerSelection === "scissors") {
    switch (computerSelection) {
      case "rock":
        result = "You Lose! Rock beats Scissors";
        break;
      case "paper":
        result = "You Win! Paper beats Scissors";
        break;
      case "scissors":
        result = "Its a Tie!";
        break;
    }
  }

  return result;
}

const playerSelection = prompt("What do you choose?").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
