function lonelyinteger(a) {
  const intObj = {};

  for (let i = 0; i < a.length; i++) {
    if (!intObj[a[i]]) {
      intObj[a[i]] = 1;
    } else {
      intObj[a[i]] += 1;
    }
  }

  for (const [key, value] of Object.entries(intObj)) {
    if (value === 1) {
      return key;
    }
  }
}
