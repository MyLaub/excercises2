// const bc = [
//   { name: "Hvidevarer", link: "/hvidevarer" },
//   { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
//   { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
// ];

// document.querySelector("button").addEventListener("click", klik);

// function klik() {
//   let string = "";
//   //   string += "Finn";
//   //   string += "hallo";
//   // &nbsp;
//   console.log(string);
//   bc.forEach((elm) => {
//     console.log("elm", elm.name);

//     string += `<li><a href="">${elm.link}</a><li/>`;
//   });
//   console.log(string);
//   document.querySelector("ul").innerHTML = string;
// }

// const bc = [
//   { name: "Hvidevarer", link: "/hvidevarer" },
//   { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
//   { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
// ];

// document.querySelector("button").addEventListener("click", click);

// function click() {
//   let str = "";

//   console.log(str);

//   bc.forEach((elm, taeller, arr) => {
//     console.log("elm", elm.name, taeller);
//     str += `<li>
//         <a href="">${elm.name}</a>
//       </li>`;

//     //   console.log(str);
//     if (taeller === arr.length - 1) {
//       str += `<li>${elm.name}</li>`;
//       bc.shift();
//       console.log("tæller", taeller);
//     }
//   });
//   document.querySelector("ul").innerHTML = str;
// }

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector("button").addEventListener("click", click);

function click() {
  let str = "";

  bc.forEach((elm, taeller, arr) => {
    // str += "&nbsp/&nbsp";
    if (taeller === arr.length - 1) {
      str += `<li>${elm.name}</li>`;
    } else {
      str += `<li><a href="${elm.link}">${elm.name}</a>&nbsp/&nbsp</li>`;
    }
  });

  document.querySelector("ul").innerHTML = str;
}
