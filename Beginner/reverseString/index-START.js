/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

// Built in Methods
// function reverseString(text) {
//   return text
//     .split("")
//     .reverse()
//     .join("");
// }

// ES6 Syntax
// function reverseString(text) {
//   return [...text].reverse().join("");
// }

// For Loop
// function reverseString(text) {
//   let reversedString = "";
//   for (let i = text.length - 1; i >= 0; i--) {
//     reversedString += text[i];
//   }
//   return reversedString;
// }

// For of loop
function reverseString(text) {
  let result = "";

  for (let char of text) {
    result = char + result;
  }

  return result;
}

// Recursive solution
function reverseString(text) {
  if (text === "") {
    return "";
  } else {
    return reverseString(text.substring(1)) + text[0];
  }
}

// Reduce Solution
function reverseString(text) {
  return text.split("").reduce((acc, char) => char + acc, "");
}

// ES6 Spread Operator
function reverseString(text) {
  return [...text].reduce((acc, char) => char + acc, "");
}

module.exports = reverseString;
