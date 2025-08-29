
// "use strict";

// const btn = document.querySelector("button")
// const input = document.querySelector("input")
// const h2 = document.querySelector("h2")


// const computerNum = Math.floor(Math.random()*100)+1;
// // let brugerGuess = 12

// btn.addEventListener("click", klik_btn)
// function klik_btn() {
//     brugerGuess = input.value;

//     // console.log("computerNum", computerNum)
//         console.log(typeof brugerGuess)
//     console.log("brugerGuess", brugerGuess)
//     let feedbackText;

//     if(brugerGuess< computerNum){
//         feedbackText= "Det for lavt prøv igen"

//     }else if(brugerGuess> computerNum){

//     feedbackText= "Det for højt prøv igen"
//     }else{
//         feedbackText= "Du har gættet rigtigt"
//     }
//     h2.textContent = feedbackText
//     console.log(feedbackText)
// }

"use strict";

const btn = document.querySelector("button");
const input = document.querySelector("input");
const h2 = document.querySelector("h2");

const computerNum = Math.floor(Math.random() * 100) + 1;
let userGuess;

btn.addEventListener("click", click_btn);
function click_btn() {
  userGuess = parseInt(input.value);
  console.log("click", computerNum);
  let feedbackText;
  if (userGuess === computerNum) {
    feedbackText = "YAY! You guessed it";
    h2.classList.add("wiggle");
  } else if (userGuess > computerNum) {
    feedbackText = "Too high. Try again";
  } else {
    feedbackText = "Too low. Try again";
  }
  h2.textContent = feedbackText;
  console.log(feedbackText);
}
//
//
//
//
// console.log("tilfældigt tal " + Math.floor(Math.random() * 10));
// const n1 = 1;
// const n2 = 2;
// const s1 = "1";
// const s2 = "2";
// console.log(s1 + n2);