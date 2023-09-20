const balance = new Number(100);
console.log(balance); // Expected Output: [Number: 100]
console.log(balance.toString()); // converting a number data type into string
console.log(typeof balance.toString()); // data type will be string

// The parseInt() method parses the given string argument and returns an integer number parsed from the string.
let num3 = Number.parseInt("32.65");
console.log(num3); // Expected Output: 32
let num5 = 15;
console.log(num5.toString(2)); // Optional parameter of Base 2 Expected Output will be 1111

// If an integer can't be parsed from the given string, the method returns NaN.
let num4 = Number.parseInt("Hello, World!");
console.log(num4); // Expected Output: NaN

let num6 = 68;
console.log(num6.toFixed(2)); // To fix a number showing digits after decimal point

const otherNumber = 289.6541;
console.log(otherNumber.toPrecision(3)); // To precise the number at certain digits

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // To display a number in local format of US
console.log(hundreds.toLocaleString("en-IN")); // To display a number in local format of India/Pakistan

// +++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-4)); // Converting into a positive number

// The Math.round() static method returns the value of a number rounded to the nearest integer.
console.log(Math.round(0.9)); // Expected output: 1
console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05)); // Expected output: 6 6 5
console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95)); // Expected output: -5 -5 -6

// The Math.ceil() static method always ROUNDS UP and returns the SMALLEST INTEGER greater than or equal to a given number.
console.log(Math.ceil(0.95)); // Expected output: 1
console.log(Math.ceil(4)); // Expected output: 4
console.log(Math.ceil(7.004)); // Expected output: 8
console.log(Math.ceil(-7.004)); // Expected output: -7

// The Math.floor() static method always ROUNDS DOWN and returns the LARGEST INTEGER less than or equal to a given number.
console.log(Math.floor(5.95)); // Expected output: 5
console.log(Math.floor(5.05)); // Expected output: 5
console.log(Math.floor(5)); // Expected output: 5
console.log(Math.floor(-5.05)); // Expected output: -6

// The Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.
console.log(Math.max(1, 3, 2)); // Expected output: 3
console.log(Math.max(-1, -3, -2)); // Expected output: -1

const array1 = [1, 3, 2];
console.log(Math.max(...array1)); // Expected output: 3
// These three dots are called the spread syntax or spread operator. The spread syntax is a feature of ES6, and it's also used in React. Spread syntax allows you to deconstruct an array or object into separate variables.

console.log(Math.max()); // Expected output: -Infinity

// The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3)); // Expected output: 0, 1 or 2
console.log(getRandomInt(1)); // Expected output: 0

let x = Math.floor(Math.random() * 10);
console.log(x); // 0-9

let q = Math.floor(Math.random() * 10) + 1;
console.log(q); // 1-10

let y = Math.floor(Math.random() * 11);
console.log(y); // 0-10

let z = Math.floor(Math.random() * 100);
console.log(z); // 0-99

let w = Math.floor(Math.random() * (25 - 15)) + 15; // min included max excluded i.e random numb 15-24
console.log(w);

// A function which produces a random number between two limits where lower included upper excluded
function getRandom(min, max) {
    let anOtherNumber = Math.floor(Math.random() * (max - min)) + min;
    return anOtherNumber;
}
console.log(getRandom(10, 20)); // Expected Output will be Random Number from 10 to 19

// A function which produces a random number between two limits where both lower and upper are included
function getRandom(min, max) {
    let anOtherNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return anOtherNumber;
}
console.log(getRandom(10, 20)); // Expected Output will be Random Number from 10 to 20
