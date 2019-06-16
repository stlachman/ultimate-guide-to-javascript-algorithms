/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

function maxRecurringChar(text) {
  const charStore = {};
  let maxChar = "";
  let maxCharValue = 0;
  for (let i = 0; i < text.length; i++) {
    charStore[text[i]] = charStore[text[i]] + 1 || 1;
  }
  for (let count in charStore) {
    if (charStore[count] > maxCharValue) {
      maxChar = count;
      maxCharValue = charStore[count];
    }
  }
  return maxChar;
}

// function maxRecurringChar(text) {
//   let charMap = {}
//   let maxCharValue = 0
//   let maxChar = ''

//   for (let char of text) {
//     if (charMap.hasOwnProperty(char)) {
//       charMap[char]++
//     } else {
//       charMap[char] = 1
//     }
//   }

//   for (let char in charMap) {
//     if (charMap[char] > maxCharValue) {
//       maxCharValue = charMap[char]
//       maxChar = char
//     }
//   }

//   return maxChar
// }

module.exports = maxRecurringChar;
