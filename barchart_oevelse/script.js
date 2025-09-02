// const list = document.querySelector("ul");

// const li = document.createElement("li");
// li.style.setProperty("--height", "30");
// list.appendChild(li);

const list = document.querySelector("ul");
const barArr = [];

setInterval(generateBars, 500);

function generateBars() {
  barArr.push(Math.floor(Math.random() * 100));

  if (barArr.length > 6) {
    barArr.shift();
  }
  //   console.log(barArr);
  render();
}

function render() {
  document.querySelectorAll("li").forEach((elm, i) => {
    console.log("i", i);
    elm.style.setProperty("--height", barArr[i]);
  });
}
