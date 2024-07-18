// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
const str1 = "30 Days Of JavaScript";

// Print the string on the browser console using console.log()
console.log("hello!");

// Print the length of the string on the browser console using console.log()
const str3 = "mastaboy";
console.log(str3.length);

// Change all the string characters to capital letters using toUpperCase() method
console.log(str1.toUpperCase());

// Change all the string characters to lowercase letters using toLowerCase() method
const str4 = "30 DAYS OF JAVASCRIPT";
console.log(str4.toLowerCase());

// Cut (slice) out the first word of the string using substr() or substring() method
console.log(str1.substr(0, 2)); // 30
console.log(str1.substring(0, 2)); // 30

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(str1.substr(3, str1.length)); // Days Of JavaScript

// Check if the string contains a word Script using includes() method
console.log(str1.includes("Script")); // true

// Split the string into an array using split() method
console.log(str1.split("")); // ['3', '0', ' ', 'D', 'a', 'y', 's', ' ', 'O', 'f', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

// Split the string 30 Days Of JavaScript at the space using split() method
console.log(str1.split(" ")); // ['30', 'Days', 'Of', 'JavaScript']

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(", ")); // ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(str1.replace("JavaScript", "Python")); // 30 Days Of Python

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(str1.charAt(15)); // S

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(str1.charCodeAt(11)); // 74 (for 'J')

// Use indexOf to determine the position of the first occurrence of 'a' in 30 Days Of JavaScript
console.log(str1.indexOf("a")); // 4

// Use lastIndexOf to determine the position of the last occurrence of 'a' in 30 Days Of JavaScript.
console.log(str1.lastIndexOf("a")); // 14

// Use indexOf to find the position of the first occurrence of the word 'because' in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'
const stringIndex =
  "You cannot end a sentence with because because because is a conjunction";
console.log(stringIndex.indexOf("because")); // 31

// Use lastIndexOf to find the position of the last occurrence of the word 'because' in the same sentence.
console.log(stringIndex.lastIndexOf("because")); // 47

// Use search to find the position of the first occurrence of the word 'because' in the same sentence.
console.log(stringIndex.search("because")); // 31

// Use trim() to remove any trailing whitespace at the beginning and the end of a string. E.g ' 30 Days Of JavaScript '.
const strTrim = " 30 Days Of JavaScript ";
console.log(strTrim.trim()); // '30 Days Of JavaScript'

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(str1.startsWith("30")); // true

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(str1.endsWith("JavaScript")); // true

// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(str1.match(/a/g)); // ['a', 'a', 'a']

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
const strPart1 = "30 Days of";
const strPart2 = "JavaScript";
console.log(strPart1.concat(" ", strPart2)); // '30 Days of JavaScript'

// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(str1.repeat(2)); // '30 Days Of JavaScript30 Days Of JavaScript'
