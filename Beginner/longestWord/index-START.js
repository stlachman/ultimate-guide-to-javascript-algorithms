/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

function longestWord(text) {
  let longest = "";
  let strArr = text.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length > longest.length) {
      longest = strArr[i];
    }
  }
  return longest;
}

// Reduce

// function longestWord(text) {
//   var result = text.split(" ").reduce((maxLengthWord, currentWord) => {
//     if (currentWord.length > maxLengthWord.length) {
//       return currentWord;
//     } else {
//       return maxLengthWord;
//     }
//   }, "");
//   return result;
// }

// Sort
function longestWord(text) {
  var sortedArray = text
    .split(" ")
    .sort((wordA, wordB) => wordB.length - wordA.length);
  return sortedArray[0];
}

module.exports = longestWord;
