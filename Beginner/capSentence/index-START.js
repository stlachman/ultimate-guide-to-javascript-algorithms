/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/

function capSentence(text) {
  const splitText = text.toLowerCase().split(" ");
  const caps = splitText.map(word => {
    return word.substring(0, 1).toUpperCase() + word.substring(1);
  });

  return caps.join(" ");
}

// forEach Method
// function capSentence(text) {
//   let wordsArray = text.toLowerCase().split(' ')
//   let capsArray = []

//   wordsArray.forEach(word => {
//     capsArray.push(word[0].toUpperCase() + word.slice(1))
//   });

//   return capsArray.join(' ')
// }

// Replace Method
// function capSentence(text) {
//   let wordsArray = text.toLowerCase().split(" ");

//   let capsArray = wordsArray.map(word => {
//     return word.replace(word[0], word[0].toUpperCase());
//   });

//   return capsArray.join(" ");
// }

module.exports = capSentence;
