const list = document.querySelector("ul");

const li = document.createElement("li");
li.style.setProperty("--height", "30");
list.appendChild(li);
const myArray = [];
setInterval(genererSoejle, 1000);

function genererSoejle() {
  console.log("genererSoejle");
  if (myArray.length > 19) {
    myArray.shift();
    console.log(list.firstElementChild);
    list.removeChild(list.firstElementChild);
  }

  const randoNum = Math.floor(Math.random() * 100) + 1;
  myArray.push(randoNum);
  console.log("array", myArray.length);
  //   console.log("child nodes", list.querySelectorAll("li").length);

  console.log(myArray);
  const li = document.createElement("li");
  li.style.setProperty("--height", randoNum);
  list.appendChild(li);
}
