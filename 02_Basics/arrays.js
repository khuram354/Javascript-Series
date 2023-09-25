//  The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
//  In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:
//  JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
//  JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
//  JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

const fruits = [];
console.log(typeof fruits); // 'object'
console.log(fruits); // []
console.log(fruits[1]); // undefined

// To check whether its an array or not we use following methods;
let typeData = Array.isArray(fruits);
console.log(typeData); // true
console.log(fruits instanceof Array); // true

// push method inserts the elements from the ending of array
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

// When setting a property on a JavaScript array with a valid array index outside the current bounds, it will create empty slots.
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6

// Increasing the length extends the array by adding empty slots without creating new elements.
fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined

// Decreasing the length property removes elements.
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2

// To add elements, use the push method. Do not assign it like you would a variable.
fruits.push("grapes", "guava", "mango");
console.log(fruits[0]); // 'banana'
console.log(fruits[1]); // 'apple'
console.log(fruits[2]); // 'grapes'
console.log(fruits[3]); // 'guava'
console.log(fruits[4]); // 'mango'
console.log(fruits.length); // 5
console.log(fruits); // [ 'banana', 'apple', 'grapes', 'guava', 'mango' ]

// To get the last idex of an array
console.log(fruits.length - 1); // 4 i.e last index of array having lengh 5 will be 4 as index starts from 0

// To access the last index in an array we use lengh-1
console.log(fruits[fruits.length - 1]); // mango
