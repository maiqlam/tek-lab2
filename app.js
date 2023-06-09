// ---------------- 1. Easy Going ----------------
for (i = 1; i <= 20; i++) {
    console.log(i);
}

// ---------------- 2. Get Even ----------------
for (i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// ---------------- 3. FizzBuzz ----------------
const fizzBuzz = [];

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzz.push("FizzBuzz");
    }
    else if (i % 3 === 0) {
        fizzBuzz.push("Fizz");
    }
    else if (i % 5 === 0) {
        fizzBuzz.push("Buzz");
    }
    else {fizzBuzz.push(i)};
}

console.log(fizzBuzz);

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
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (const i of ninjaTurtles) {
    console.log(i.toUpperCase());
}

// // ---------------- 6. Methods, Revisited  ----------------
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// // Console log the index of Titanic.
console.log(favMovies.indexOf("Titanic")); // 8

// // Use the .sort method.
favMovies.sort();

// // Use the method pop.
favMovies.pop();

// // // push "Guardians of the Galaxy".
favMovies.push("Guardians of the Galaxy");

// // // Reverse the array.
favMovies.reverse();

// // // Use the shift method.
favMovies.shift();

// // // unshift - what does it return?
favMovies.unshift("Interstellar");

// // // splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained" instead of counting it yourself).
favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar");

// // // slice the last half of the array. (Challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it.)
let movieSlice = (favMovies.slice(favMovies.length/2, favMovies.length));

// // // Store the value of your slice in a variable and console.log it.
console.log(movieSlice);

// // // console.log your final results.
console.log(favMovies);

// // // After running the above tasks, console.log the index of "Fast and Furious."
console.log(favMovies.indexOf("Fast and Furious"));
// // We removed it from the array. What value do we get when we look for the index of something that is not in the array?
// // index is -1 if not found in the array (but f+f was not removed, so index of f+f is 14).

// ---------------- 7. Where is Waldo ----------------
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]];

// // Remove Eggbert (hint look at the slice/splice methods).
// // Change "Neff" to "No One".
// // Access and console.log "Waldo".
whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"), 1);
whereIsWaldo[1].splice(2, 1, "No One");
console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1]);

// ---------------- 8. Excited Kitten ----------------
// for (let i = 0; i <= 20; i++) {
//     console.log("Love me, pet me! HSSSSSS!");
// }
const loveMe = ["Love me, pet me! HSSSSSS!"];
const kittyTalk = ["...human... why you taking pictures of me...?", "...the catnip made me do it...", "...why does the red dot always get away...?"];
let meow = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        meow = [Math.floor(Math.random() * kittyTalk.length)];
        console.log(kittyTalk[meow]);
    }
    else {console.log(loveMe);}
}

// ---------------- 9. Find the Median ----------------
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort();
let median = Math.floor(nums.length / 2);
console.log(nums[median]);

// ---------------- 10. Hungry for More? ----------------

// ---------------- 11. Alien Attire ----------------

// ---------------- 12. Dress You Up ----------------

// ---------------- 13. Dirty Laundry ----------------

// ---------------- 14. Inventory ----------------
