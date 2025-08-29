"use strict";

const btn_higher = document.querySelector("#btn_higher")
const btn_lower = document.querySelector("#btn_lower")
const btn_correct = document.querySelector("#btn_correct")
const btn_start = document.querySelector("#btn_start")
const userNum = 34

const h2 = document.querySelector("h2");

btn_lower.addEventListener("click", guessLower);
btn_higher.addEventListener("click", guessHigher);

btn_start.addEventListener("click", computerGuess);


function computerGuess(min = 0, max = 100){
    // gætte det halve af min og max
    let computerChoice = max / 2;
} 


function guessLower(){
    console.log("the number is lower!");
}

function guessHigher(){
    console.log("the number is higher!");
}


function higherGuess(min, max){
    // gætte det halve af min og max
    return max / 2;
}


function lowerGuess(min, max){
    // gætte det halve af min og max
    return max / 2;
}








// function guessIt(computerGuess, userNum){
//     return ()
    

// }



// function momsBeregner (beloeb, moms = 25){
//     return (beloeb * moms) / 100 + beloeb;

// }

// btn.addEventListener("click", click_btn);
// function click_btn() {
//   userGuess = parseInt(input.value);
//   console.log("click", computerNum);
//   let feedbackText;
//   if (userGuess === computerNum) {
//     feedbackText = "YAY! You guessed it";
//     h2.classList.add("wiggle");
//   } else if (userGuess > computerNum) {
//     feedbackText = "Too high. Try again";
//   } else {
//     feedbackText = "Too low. Try again";
//   }
//   h2.textContent = feedbackText;
//   console.log(feedbackText);
// }