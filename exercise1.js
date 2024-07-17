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
console.log(str4.substr(2, 7));
console.log(str4.substring(2, 7));
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(str4.substr(3, str4.length));
// Check if the string contains a word Script using includes() method
console.log(str4.includes("script"));
// Split the string into an array using split() method
console.log(str4.split(""));
// Split the string 30 Days Of JavaScript at the space using split() method
console.log(str4.split(" "));

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
const companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companies.split(","));
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(str4.replace("JAVASCRIPT", "PYTHON"));
// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(str4.charAt(15));
// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(str4.charCodeAt("J"));
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(str4.indexOf("S"));
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(str4.lastIndexOf("O"));
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
// Use match() method to find all the a’s in 30 Days Of JavaScript
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
// Use repeat() method to print 30 Days Of JavaScript 2 times
