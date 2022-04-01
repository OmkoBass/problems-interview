const word = "bababooey";

let charObj = {};
for (const char of word) {
  if (!charObj[char]) {
    charObj[char] = 1;
  } else {
    charObj[char] = ++charObj[char];
  }
}

let maxObj = { char: word[0], repeat: charObj[word[0]] };

for (const [key, value] in Object.entries(charObj)) {
  if (value > maxObj.repeat) {
    maxObj = { char: key, repeat: value };
  }
}

console.log(maxObj);
