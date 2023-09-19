// Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their length, to build and concatenate them using the + and += string operators, checking for the existence or location of substrings with the indexOf() method.

// Strings can be created as primitives, from string literals, or as objects, using the String() constructor:
const string1 = "A string primitive";
const string2 = "Also a string primitive";
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");

console.log(string1.length); // 18
console.log(string2.toUpperCase()); // ALSO A STRING PRIMITIVE
console.log(string3.charAt(0)); // Y
console.log(string4.indexOf("o")); // 9

const str9 = "Life, the universe and everything. Answer:";
console.log(`${str9} ${str9.length}`); // Expected output: "Life, the universe and everything. Answer: 42"

// The concat() method of String values concatenates the string arguments to this string and returns a new string.
const hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day.")); // Hello, Kevin. Have a nice day.

// The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.
const str1 = "Cats are the best!";
console.log(str1.endsWith("best!")); // Expected output: true
const str2 = "Is this a question 18";
console.log(str2.endsWith("question")); // Expected output: false

// The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.
const str = "To be, or not to be, that is the question.";
console.log(str.includes("To be")); // true
console.log(str.includes("question")); // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1)); // false
console.log(str.includes("TO BE")); // false
console.log(str.includes("")); // true

// The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.
const str8 = "The quick brown fox jumps over the lazy dog.";
console.log(str8.slice(31)); // Expected output: "the lazy dog."
console.log(str8.slice(4, 19)); // Expected output: "quick brown fox"
console.log(str8.slice(-4)); // Expected output: "dog."
console.log(str8.slice(-9, -5)); // Expected output: "lazy"

// The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
const str55 = "The quick brown fox jumps over the lazy dog.";
const words = str55.split(" ");
console.log(words[3]); // Expected output: "fox"
const chars = str55.split("");
console.log(chars[8]); // Expected output: "k"
const strCopy = str55.split();
console.log(strCopy); // Expected output: Array ["The quick brown fox jumps over the lazy dog."]

// The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
const greeting = "   Hello world!   ";
console.log(greeting); // Expected output: "   Hello world!   "
console.log(greeting.trim()); // Expected output: "Hello world!"
