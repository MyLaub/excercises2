"use strict";
let userChoice
let computerChoice
const rockBtn = document.querySelector(".rock")
const paperBtn = document.querySelector(".paper")
const scissorsBtn = document.querySelector(".scissors")
const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")

addEventListenersToButtons();
function addEventListenersToButtons(){
    rockBtn.addEventListener("click", rockKlik)
    paperBtn.addEventListener("click", paperKlik)
    scissorsBtn.addEventListener("click", scissorsKlik)
}

function rockKlik(){
    // console.log("ROCK")
    userChoice= "rock"
    computerGuess()
}
function paperKlik(){
    // console.log("PAPER")
    userChoice= "paper"
     computerGuess()
}
function scissorsKlik(){
    // console.log("SCISSORS")
    userChoice= "scissors"
     computerGuess()
}


function computerGuess(){

    const choice_arr = ["rock", "paper", "scissors"]
    const randomNum = Math.floor(Math.random()*3)
    computerChoice = choice_arr[randomNum]
    console.log("computerChoice", computerChoice)
    // console.log(userChoice);
    // computerChoice = "paper"
    animationStarter();
}


function animationStarter(){
    player1.classList.add("shake")
}

function animationEnd(){
    //Evaluation
}

function showResultScreen(){}