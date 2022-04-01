const word = "aaaomerbbbz";

let substring = [];

let newSubstring = true;
let currentSubstring = -1;
for (let i = 0; i < word.length - 1; i++) {
  if (word[i] !== word[i + 1]) {
    if (newSubstring === true) {
      substring.push([]);
      newSubstring = false;
      currentSubstring++;
    }

    substring[currentSubstring].push(word[i]);
  } else {
    if (newSubstring && currentSubstring !== -1) {
      substring[currentSubstring].push(word[i]);
    }

    newSubstring = true;
  }
}

let maxArray = substring[0];
for (let i = 0; i < substring.length; i++) {
  if (substring[i].length > maxArray.length) {
    maxArray = substring[i];
  }
}

console.log(maxArray);
