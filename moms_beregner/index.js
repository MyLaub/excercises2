"use strict";

// const beloeb = Math.floor(mathRandom() *100 +1);

// console.log("math.random", beloeb);
// const moms = undefined;

function momsBeregner (beloeb, moms = 25){
    return (beloeb * moms) / 100 + beloeb;

}

console.log("resultat", momsBeregner(100, 33))