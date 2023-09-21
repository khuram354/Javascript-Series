let myDate = new Date();

console.log(myDate); // current date and time
console.log(typeof myDate); // Object

console.log(myDate.toString()); // Date as a string
console.log(myDate.toISOString()); // Date in ISO format

let myCreatedDate = new Date(2023, 0, 21, 9, 3); // (yy, m, dd, hh, mm format) : month starts from 0
console.log(myCreatedDate.toISOString());

// The getDate() method of Date instances returns the day of the month.
const birthday = new Date("August 19, 1975");
const date1 = birthday.getDate();
console.log(date1); // Expected output: 19

// The getDay() method of Date instances returns the day of the week.
const day1 = birthday.getDay(); // Sunday - Saturday : 0 - 6
console.log(day1); // Expected output: 2

let x = new Date("September 21, 2023, 06:35:40");
console.log(x.getTime()); // Output will be in miliseconds
console.log(x.getFullYear()); // Output will be the YEAR
console.log(x.getMonth()); // Output will be the 8 because month starts from 0
console.log(x.getMonth() + 1); // Output will be the 9, the exact Month of the date
console.log(x.getHours()); // Output will be the hours of the date
console.log(x.getMinutes()); // Output will be the minutes of the date
console.log(x.getSeconds()); // Output will be the seconds of the date
console.log(x.getDay()); // Output will be the 4 i.e Thursday because Day starts from 0 representing SUNDAY

// Set the year, month, day, hours, and minutes
let y = new Date();
y.setFullYear(2023);
y.setMonth(8); // September (0-based index, so 8 corresponds to September)
y.setDate(21);
y.setHours(6);
y.setMinutes(35);

console.log(y);

console.log(y.getFullYear()); // Output: 2023
console.log(y.getMonth()); // Output: 8 (September)
console.log(y.getDate()); // Output: 21
console.log(y.getHours()); // Output: 6
console.log(y.getMinutes()); // Output: 35

// Create a Date object for the current date
let anyDate = new Date();

// Calculate the date 50 days in the future
let futureDate = new Date(anyDate);
futureDate.setDate(anyDate.getDate() + 50);

// Output the future date
console.log(`Current Date: ${anyDate.toDateString()}`);
console.log(`Future Date (50 days later): ${futureDate.toDateString()}`);
