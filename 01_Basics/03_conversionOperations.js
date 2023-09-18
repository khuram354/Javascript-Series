let score = "null";

console.log(score);
console.log(typeof score); // this will print data type as of string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // this will print data type as of number
console.log(valueInNumber); // this will print data type as of NaN (Not a Number)

score = null;

console.log(score); // this will print data type as of null
console.log(typeof score); //this will print data type as of object

score = "";
console.log(typeof score); // empty string will give you data type as of string

score = "khuram";
let k = Number(score);
console.log(k);
