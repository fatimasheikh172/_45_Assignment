// Tests for equality and inequality with strings
var string1 = 'hello';
var string2 = 'world';
var string3 = 'hello';
console.log("Test for equality between 'hello' and 'world'. I predict False.");
console.log(string1 === string2);
console.log("Test for inequality between 'hello' and 'world'. I predict True.");
console.log(string1 !== string2);
console.log("Test for equality between 'hello' and 'hello'. I predict True.");
console.log(string1 === string3);
console.log("Test for inequality between 'hello' and 'hello'. I predict False.");
console.log(string1 !== string3);
// Tests using the lower case function
var uppercaseString = 'HELLO';
var lowercaseString = 'hello';
console.log("Test if 'HELLO' is equal to 'hello' after converting to lowercase. I predict True.");
console.log(uppercaseString.toLowerCase() === lowercaseString);
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 10;
var num2 = 20;
console.log("Test if 10 is equal to 20. I predict False.");
console.log(num1 === num2);
console.log("Test if 10 is less than 20. I predict True.");
console.log(num1 < num2);
console.log("Test if 20 is greater than or equal to 10. I predict True.");
console.log(num2 >= num1);
console.log("Test if 20 is less than or equal to 10. I predict False.");
console.log(num2 <= num1);
// Tests using "and" and "or" operators
var condition1 = true;
var condition2 = false;
console.log("Test if true AND false. I predict False.");
console.log(condition1 && condition2);
console.log("Test if true OR false. I predict True.");
console.log(condition1 || condition2);
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
console.log("Test if 'apple' is in the array. I predict True.");
console.log(fruits.includes("apple"));
console.log("Test if 'grape' is in the array. I predict False.");
console.log(fruits.includes('grape'));
// Test whether an item is not in an array
console.log("Test if 'grape' is not in the array. I predict True.");
console.log(!fruits.includes('grape'));
console.log("Test if 'apple' is not in the array. I predict False.");
console.log(!fruits.includes('apple'));
