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

// tosring()
let outPut = fruits.toString();
console.log(outPut); // "banana,apple,grapes,guava,mango"
console.log(typeof outPut); // string

// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"
console.log(elements.join(""));
// Expected output: "FireAirWater"
console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"

// The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop()); // Expected output: "tomato"
console.log(plants); // Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();
console.log(plants); // Expected output: Array ["broccoli", "cauliflower", "cabbage"]

// The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
const myFish = ["angel", "clown", "mandarin", "surgeon"];
console.log("myFish before:", myFish); // myFish before: ['angel', 'clown', 'mandarin', 'surgeon']
const shifted = myFish.shift();
console.log("myFish after:", myFish); // myFish after: ['clown', 'mandarin', 'surgeon']
console.log("Removed this element:", shifted); // Removed this element: angel

// The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array
myFish.unshift("Snacky");
console.log(myFish); // [ 'Snacky', 'clown', 'mandarin', 'surgeon' ]

// Deleting array elements  +++ WE SHOULD AVOID DELETE OPERATOR +++
// When you delete an array element, the array length is not affected. This holds even if you delete the last element of the array.
// When the delete operator removes an array element, that element is no longer in the array.

const colors = ["red", "green", "blue", "orange", "black", "white"];
delete colors[1];
console.log(colors); // [ 'red', <1 empty item>, 'blue', 'orange', 'black', 'white' ]
console.log(colors.length); // 6 this means length remains same
