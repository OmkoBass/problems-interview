// First non repeating character from a string

const word = "rraattu";

const firstNonRepeatingChar = (word) => {
  let wordObj = {};

  for (let i = 0; i < word.length; i++) {
    if (!wordObj[word[i]]) {
      wordObj[word[i]] = 1;
    } else {
      wordObj[word[i]] = wordObj[word[i]] + 1;
    }
  }

  console.log(wordObj);

  for (const key of Object.keys(wordObj)) {
    if (wordObj[key] === 1) {
      return key;
    }
  }

  return null;
};

const firstChar = firstNonRepeatingChar(word);

console.log(firstChar);
