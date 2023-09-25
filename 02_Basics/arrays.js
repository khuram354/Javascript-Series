//  The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
//  In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:
//  JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
//  JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
//  JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

const arr = new Array();
console.log(typeof arr); // object
const fruits = [];
console.log(typeof fruits); // object
console.log(fruits); // []
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
