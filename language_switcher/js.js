"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
let locale = "da";

document.querySelector("#language-switcher").addEventListener("change", (event) => changeEvent(event));

function changeEvent(event) {
  locale = event.target.value;
  console.log(locale);
  changeContent(locale);
}

function changeContent(language) {
  document.querySelector("h1").textContent = texts[language].texts[0].text;
  document.querySelector(".footer").textContent = texts[language].texts[1].text;
}
