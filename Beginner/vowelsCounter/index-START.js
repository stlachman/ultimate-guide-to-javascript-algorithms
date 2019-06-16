/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

// Iterative solution
// function vowelsCounter(text) {
//   let count = 0;
//   const vowels = ["a", "e", "i", "o", "u"];
//   text = text.toLowerCase();
//   for (let i = 0; i < text.length; i++) {
//     if (vowels.includes(text[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// Regex solution
function vowelsCounter(text) {
  let matchingChars = text.match(/[aeiou]/gi);
  if (matchingChars) {
    return matchingChars.length;
  } else {
    return 0;
  }
}

module.exports = vowelsCounter;
