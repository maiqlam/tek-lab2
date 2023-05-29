// ---------------- 1. Easy Going ----------------
// for (i = 1; i <= 20; i++) {
//     console.log(i);
// }

// ---------------- 2. Get Even ----------------
// for (i = 0; i <= 200; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// ---------------- 3. FizzBuzz ----------------
// const fizzBuzz = [];

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         fizzBuzz.push("FizzBuzz");
//     }
//     else if (i % 3 === 0) {
//         fizzBuzz.push("Fizz");
//     }
//     else if (i % 5 === 0) {
//         fizzBuzz.push("Buzz");
//     }
//     else {fizzBuzz.push(i)};
// }

// console.log(fizzBuzz);

// ---------------- 4. Wild Wild Life ----------------
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
for (let i in plantee) {
    if (typeof plantee[i] === "number"){
        plantee[i]++;
    }
}
console.log(plantee);

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
for (let i in wolfy) {
    if (wolfy[i] === "Yukon Territory") {
        wolfy[i] = "Gotham City"
    };
}
console.log(wolfy);

// Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins");
console.log(dart);

// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
console.log(porgee);
wolfy.shift();
wolfy.unshift("Gameboy");
console.log(wolfy);

// ---------------- 5. Yell at the Ninja Turtles ----------------


// ---------------- 6. Exercise ----------------


// ---------------- 7. Exercise ----------------


// ---------------- 8. Exercise ----------------


// ---------------- 9. Exercise ----------------