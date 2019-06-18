function searchReplace(sentence, word, replacementWord) {
  if (word[0] === word[0].toUpperCase()) {
    replacementWord =
      replacementWord[0].toUpperCase() + replacementWord.slice(1);
  }
  return sentence.replace(word, replacementWord);
}

// Another approach

function searchReplace(str, word, replacementWord) {
  let regex = new RegExp(word, "gi");
  if (/[A-Z]/.test(word[0])) {
    replacementWord =
      replacementWord.charAt(0).toUpperCase() + replacementWord.slice(1);
  }
  return str.replace(regex, replacementWord);
}
