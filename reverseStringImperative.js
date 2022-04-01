// Write a method or a function that returns words in reverse order for a given text.
// Words are considered to be groups of letters separated by a whitespace character.
// The first word of a new sentence should start with a capital letter and sentences
// should be separated with full stop ("."). All other words except the first word of
// the input sentence should retain their initial form. Please do not use built-in string helper methods,
// like for example split, replace or reverse. EXAMPLE: Agree with you the council does.

function reverseWord(word) {
  let tempWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    tempWord += word[i];
  }

  return tempWord;
}

function reverseString(sentence) {
  let reversed = "";

  let tempChars = "";
  for (const char of sentence) {
    if (char === " ") {
      reversed += `${reverseWord(tempChars)} `;
      tempChars = "";
    } else if (char === ".") {
      tempChars += char;
      reversed += `${reverseWord(tempChars)} `;
      tempChars = "";
    }

    tempChars += char;
  }

  return reversed;
}

const sentence = "The Constitution.";

const result = reverseString(sentence);

console.log(result);
