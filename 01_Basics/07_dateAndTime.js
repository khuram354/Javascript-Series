// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970,

let myDate = new Date();
console.log(myDate); // current date and time of browser
console.log(typeof myDate); // Object

console.log(myDate.toString()); // Thu Sep 21 2023 08:51:11 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toDateString()); // Thu Sep 21 2023
console.log(myDate.toLocaleDateString()); // 9/21/2023
console.log(myDate.toLocaleString()); // 9/21/2023, 8:54:11 AM
console.log(myDate.toTimeString()); // 08:54:51 GMT+0500 (Pakistan Standard Time)

let myCreatedDate = new Date(2023, 0, 21, 9, 3); // (yy, m, dd, hh, mm format) : month starts from 0
console.log(myCreatedDate.toLocaleString());
let newDate = new Date("09-0-2023"); // Invalid Date: Day can not be 0
console.log(newDate.toLocaleString());

// The getDate() method of Date instances returns the day of the month for this date according to local time.
const birthday = new Date("August 19, 1975");

// Return Value will be An integer, between 1 and 31, representing the day of the month for the given date according to local time. Returns NaN if the date is invalid.
const date1 = birthday.getDate();
console.log(date1); // Expected output: 19

// The getDay() method of Date instances returns the day of the week for this date according to local time, where 0 represents Sunday. For the day of the month
const birthday2 = new Date("August 19, 1975");

// Return Value will be An integer, between 0 and 6, representing the day of the week for the given date according to local time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on. Returns NaN if the date is invalid.
const day1 = birthday2.getDay(); // Sunday - Saturday : 0 - 6
console.log(day1); // Expected output: 2

let x = new Date("September 21, 2023, 06:35:40");
console.log(x.getTime()); // Output will be in miliseconds
console.log(x.getFullYear()); // Output will be the YEAR
console.log(x.getMonth()); // Output will be the 8 because month starts from 0
console.log(x.getMonth() + 1); // Output will be the 9 the exact Month of the date
console.log(x.getHours()); // Output will be the hours of the date
console.log(x.getMinutes()); // Output will be the minutes of the date
console.log(x.getSeconds()); // Output will be the seconds of the date
console.log(x.getDay()); // Output will be the 4 i.e Thursday becasue Day starts from 0 representing SUNDAY

// Set the year, month, day, hours, and minutes
let y = new Date(); // Create a new Date object with the current date and time.
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
let currentDate = new Date();

// Calculate the date 50 days in the future
let futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 50);

// Output the future date
console.log(`Current Date: ${currentDate.toDateString()}`);
console.log(`Future Date: (50 days later): ${futureDate.toDateString()}`);
