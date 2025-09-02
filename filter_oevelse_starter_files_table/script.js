const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
const btn_eldrevne = document.querySelector("#eldrevne");
const btn_mereEndTo = document.querySelector("#mereEndTo");
const btn_jonas = document.querySelector("#jonas");
const btn_rugbrød = document.querySelector("#rugbrod");
const btn_showAll = document.querySelector("#showAll");

btn_eldrevne.addEventListener("click", () => showTheseVehicles(onlyElectricVehicles));
btn_mereEndTo.addEventListener("click", () => showTheseVehicles(onlyTwoSeatsVehicles));
btn_jonas.addEventListener("click", () => showTheseVehicles(ownedByJonas));
btn_rugbrød.addEventListener("click", () => showTheseVehicles(rugbrødMedSæder));
btn_showAll.addEventListener("click", () => showTheseVehicles(vehicles));
showTheseVehicles(vehicles);

// en der viser alle el drevne fartøjer
function isElektrisk(vehicle) {
  if (vehicle.isElectric) {
    return true;
  }
}

const onlyElectricVehicles = vehicles.filter(isElektrisk);
console.log("onlyElectricVehicles", onlyElectricVehicles);

// showTheseVehicles(onlyElectricVehicles);

// en der viser alle fartøjer med mere end 2 sæder
function isTwoSeats(vehicle) {
  if (vehicle.passengers > 2) {
    return true;
  }
}

const onlyTwoSeatsVehicles = vehicles.filter(isTwoSeats);
console.log("onlyTwoSeatsVehicles", onlyTwoSeatsVehicles);

// showTheseVehicles(onlyTwoSeatsVehicles);

// alle el-drevne fartøjer ejet af Jonas

function isOwnedByJonas(vehicles) {
  if (vehicles.ownedBy === "Jonas") {
    return true;
  }
}

const ownedByJonas = vehicles.filter(isOwnedByJonas);
console.log("OwnedByJonas", ownedByJonas);

// showTheseVehicles(ownedByJonas);

// alle rugbrøds drevne fartøjer med plads til mere end en.

function rugbrodMedFlere(vehicles) {
  if (vehicles.fuel === "Rugbrød" && vehicles.passengers > 1) {
    return true;
  }
}

const rugbrødMedSæder = vehicles.filter(rugbrodMedFlere);
console.log("rugbrødMedSæder", rugbrødMedSæder);

// showTheseVehicles(rugbrødMedSæder);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  let sanitizedStops;
  arr.forEach((each) => {
    // console.log("each.stops", each.stops);
    if (each.stops === undefined) {
      sanitizedStops = " ";
    } else {
      sanitizedStops = each.stops;
    }
    // console.log("each.ownedBy", each.ownedBy);
    let ifOwnedBy;
    if (each.ownedBy === undefined) {
      ifOwnedBy = " ";
    } else {
      ifOwnedBy = each.ownedBy;
    }

    let ifElektrisk;
    if (each.isElectric === undefined) {
      ifElektrisk = " ";
    } else {
      ifElektrisk = "X";
    }

    let ifTandem;
    if (each.isTandem === undefined) {
      ifTandem = " ";
    } else {
      ifTandem = "X";
    }

    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${sanitizedStops}</td>
  <td>${ifOwnedBy}</td>
  <td>${ifElektrisk}</td>
  <td>${ifTandem}</td>
</tr>`;
  });
}
