// 1. Easy Going ----------------
// for (i = 1; i <= 20; i++) {
//     console.log(i);
// }

// 2. Get Even ----------------
// for (i = 0; i <= 200; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// 3. FizzBuzz ----------------
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