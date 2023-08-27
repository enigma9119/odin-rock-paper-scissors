"use strict";

let choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return Math.floor(Math.random() * choices.length);
}

console.log(getComputerChoice());
