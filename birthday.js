function birthday(s, d, m) {
  // d is total
  // m is how many elements
  // s is array
  let foundMatches = 0;

  for (let i = 0; i < s.length; i++) {
    let sum = 0;

    for (let j = i; j < i + m; j++) {
      sum += s[j];
    }

    if (sum === d) {
      foundMatches++;
    }
  }

  return foundMatches;
}

const foundMatches = birthday([4], 4, 1);

console.log(foundMatches);
