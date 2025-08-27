
"use strict";

const btn = document.querySelector("button")
const input = document.querySelector("input")
const h2 = document.querySelector("h2")


const computerNum = Math.floor(Math.random()*100)+1;
let brugerGuess = 12

btn.addEventListener("click", klik_btn)
function klik_btn() {
    brugerGuess = input.value;

    // console.log("computerNum", computerNum)
        console.log(typeof brugerGuess)
    console.log("brugerGuess", brugerGuess)
    let feedbackText;

    if(brugerGuess< computerNum){
        feedbackText= "Det for lavt prøv igen"

    }else if(brugerGuess> computerNum){

    feedbackText= "Det for højt prøv igen"
    }else{
        feedbackText= "Du har gættet rigtigt"
    }
    h2.textContent = feedbackText
    console.log(feedbackText)
}