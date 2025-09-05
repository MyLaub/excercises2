"use strict";

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let str = "Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning.";

console.log(str);

let isKlikked = false;

document.querySelector("button").addEventListener("click", klik);

function klik() {
  if (isKlikked === true) {
    console.log("jeg har klikket");
  } else {
    console.log("første klik");
    isKlikked = true;

    // str = str.replaceAll("var", "const");
    // str = str.replaceAll("float", "grid");
    // str = str.replaceAll("marquee", "just don't");

    curseWords.forEach((word) => {
      str = str.replaceAll(word.bad, word.good);
    });

    document.querySelector("p").textContent = str;
  }
}

// const strArr = str.split(" ");

// console.log(strArr);
// console.log(strArr.join);
