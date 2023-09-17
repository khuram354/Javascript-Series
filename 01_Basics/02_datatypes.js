"use strict"; // treat all js code as of a newer version

//alert(3 + 3); // this does not work on node js. alert has a different syntax for use

console.log(3 + 2); // code should be easily readable so avoid this syntax

console.log("Khuram");

let myName = "Khuram";
let age = 30;
let isLogedIn = false;

/*

The latest ECMAScript standard defines eight data types:

Seven data types that are primitives:

1-Boolean. true and false.
2-null. A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
3-undefined. A top-level property whose value is not defined.
4-Number. An integer or floating point number. For example: 42 or 3.14159.
5-BigInt. An integer with arbitrary precision. For example: 9007199254740992n.
6-String. A sequence of characters that represent a text value. For example: "Howdy".
7-Symbol. A data type whose instances are unique and immutable.

and 

8-Object

*/

console.table([
  { Variable: "myName", Type: typeof myName },
  { Variable: "age", Type: typeof age },
  { Variable: "isLogedIn", Type: typeof isLogedIn },
]);
