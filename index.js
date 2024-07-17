// Day 1
let string1 = "JavaScript";
console.log(string1.substr(4, 6)); // Script

let country = "Finland";

let string2 = "JavaScript";

console.log(string2.substring(0, 4)); // Java
console.log(string2.substring(4, 10)); // Script
console.log(string2.substring(4)); // Script

// data types
// Strings
let space = " ";
let firstName = "Asabeneh";
let lastName = "Yetayeh";
let country1 = "Finland";
let city = "Helsinki";
// let language = "JavaScript";
let job = "teacher";
let quote = "The saying,'Seeing is Believing' is not correct in 2020.";
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`;

// String Concatenation
// Connecting two or more strings together is called concatenation. Using the strings declared in the previous String section:

let fullName = firstName + space + lastName; // concatenation, merging two string together.
console.log(fullName);

// Escape Sequences in Strings
// In JavaScript and other programming languages \ followed by some characters is an escape sequence. Let's see the most common escape characters:

// \n: new line
// \t: Tab, means 8 spaces
// \\: Back slash
// \': Single quote (')
// \": Double quote (")
console.log(
  "I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?"
); // line break
console.log("Days\tTopics\tExercises");
console.log("Day 1\t3\t5");
console.log("Day 2\t3\t5");
console.log("Day 3\t3\t5");
console.log("Day 4\t3\t5");
console.log("This is a backslash  symbol (\\)"); // To write a backslash
console.log('In every programming language it starts with "Hello, World!"');
console.log("In every programming language it starts with 'Hello, World!'");
console.log("The saying 'Seeing is Believing' isn't correct in 2020");

// Template Literals (Template Strings)
// To create a template strings, we use two back-ticks. We can inject data as expressions inside a template string. To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign. See the syntax below.

//Syntax
// `String literal text``String literal text ${expression}`;
Example: 1;

console.log(`The sum of 2 and 3 is 5`); // statically writing the data
let a = 2;
let b = 3;
console.log(`The sum of ${a} and ${b} is ${a + b}`); // injecting the data dynamically

// STRING METHODS
let stringmethodstring = "javaScript";
//1. accessing the string with index number
console.log(stringmethodstring[2]);

//2. converting the string to uppercase
console.log(stringmethodstring.toUpperCase()); /* output: JAVASCRIPT */

//3. converting the string to lowercase
let uppercaseString = "JAVASCRIPT";
console.log(uppercaseString.toLowerCase()); /*output: javascript */

// 4.substr(): It takes two arguments, the starting index and number of characters to slice.
let unit = "photosynthesis";
console.log(unit.substr(2, 5)); /*output: otosy */
// 5.substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
let language = "javascript";
console.log(string.substring(0, 4)); // Java
console.log(string.substring(4, 10)); // Script
console.log(string.substring(4)); // Script

//6. split(): The split method splits a string at a specified place
let myString = "30 Days Of JavaScript";
console.log(myString.split()); // Changes to an array -> ["30 Days Of JavaScript"]
console.log(myString.split(" ")); // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

let myFirstName = "Asabeneh";

console.log(myFirstName.split()); // Change to an array - > ["Asabeneh"]
console.log(myFirstName.split("")); // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = "Finland, Sweden, Norway, Denmark, and Iceland";

console.log(countries.split(",")); // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(", ")); //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

//7. trim(): Removes trailing space in the beginning or the end of a string.
let string = "   30 Days Of JavaScript   ";

console.log(string);
console.log(string.trim(" "));

let firstName2 = " Asabeneh ";

console.log(firstName2);
console.log(firstName2.trim()); // still removes spaces at the beginning and the end of the string
//    30 Days Of JavasCript
// 30 Days Of JavasCript
//   Asabeneh
// Asabeneh
//8. includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.
let includesString = "30 Days Of JavaScript";

console.log(includesString.includes("Days")); // true
console.log(includesString.includes("days")); // false - it is case sensitive!
console.log(includesString.includes("Script")); // true
console.log(includesString.includes("script")); // false
console.log(includesString.includes("java")); // false
console.log(includesString.includes("Java")); // true

let myHome = "Finland";

console.log(myHome.includes("fin")); // false
console.log(myHome.includes("Fin")); // true
console.log(myHome.includes("land")); // true
console.log(myHome.includes("Land")); // false

//9. replace(): takes as a parameter the old substring and a new substring.
// string.replace(oldsubstring, newsubstring)
let testString = "30 Days Of JavaScript";
console.log(testString.replace("JavaScript", "Python")); // 30 Days Of Python

let testcountry = "Finland";
console.log(testcountry.replace("Fin", "Noman")); // Nomanland

//10. charAt(): Takes index and it returns the value at that index
string.charAt(index);
let testString2 = "30 Days Of JavaScript";
console.log(testString2.charAt(0)); // 3

//  11 .indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
string.indexOf(substring);
let theString = "30 Days Of JavaScript";

console.log(theString.indexOf("D")); // 3
console.log(theString.indexOf("Days")); // 3
console.log(theString.indexOf("days")); // -1
console.log(theString.indexOf("a")); // 4
console.log(theString.indexOf("JavaScript")); // 11
console.log(theString.indexOf("Script")); //15
console.log(theString.indexOf("script")); // -1

let lastIndex = theString.length - 1;
console.log(theString.charAt(lastIndex)); // t

// 12. lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
//syntax
string.lastIndexOf(substring);
let lastIndexString =
  "I love JavaScript. If you do not love JavaScript what else can you love.";

console.log(lastIndexString.lastIndexOf("love")); // 67
console.log(lastIndexString.lastIndexOf("you")); // 63
console.log(lastIndexString.lastIndexOf("JavaScript")); // 38

// 13 .concat(): it takes many substrings and joins them.
string.concat(substring, substring, substring);
let concatString = "30";
console.log(concatString.concat("Days", "Of", "JavaScript")); // 30DaysOfJavaScript

let concatCountry = "Fin";
console.log(concatCountry.concat("land")); // Finland

// 14. startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
//syntax
string.startsWith(substring);
let startsWithString = "Love is the best to in this world";

console.log(startsWithString.startsWith("Love")); // true
console.log(startsWithString.startsWith("love")); // false
console.log(startsWithString.startsWith("world")); // false

let startswithCountry = "Finland";

console.log(startswithCountry.startsWith("Fin")); // true
console.log(startswithCountry.startsWith("fin")); // false
console.log(startswithCountry.startsWith("land")); //  false

// 15. endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
string.endsWith(substring);
let endsWithString = "Love is the most powerful feeling in the world";

console.log(endsWithString.endsWith("world")); // true
console.log(endsWithString.endsWith("love")); // false
console.log(endsWithString.endsWith("in the world")); // true

let endsWithCountry = "Finland";
console.log(endsWithCountry.endsWith("land")); // true
console.log(endsWithCountry.endsWith("fin")); // false
console.log(endsWithCountry.endsWith("Fin")); //  false

//16. repeat(): it takes a number as argument and it returns the repeated version of the string.
string.repeat(n);
let repeatString = "love";
console.log(repeatString.repeat(10)); // lovelovelovelovelovelovelovelovelovelove

// NUMBERS
const PI = Math.PI;

console.log(PI); // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI)); // 3 to round values to the nearest number

console.log(Math.round(9.81)); // 10

console.log(Math.floor(PI)); // 3 rounding down

console.log(Math.ceil(PI)); // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, returns the maximum value

const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);
