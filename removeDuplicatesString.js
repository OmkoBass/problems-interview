const word = "hello";

let uniqueLetters = [];
for (let i = 0; i < word.length; i++) {
  if (!uniqueLetters.includes(word[i])) {
    uniqueLetters.push(word[i]);
  }
}

console.log(uniqueLetters);
