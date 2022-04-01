function timeConversion(s) {
  const afterNoon = s.slice(-2);
  const hours = s.slice(0, 2);

  let hoursInt = parseInt(hours);
  let hoursString = hoursInt.toString();

  if (afterNoon === "PM") {
    if (hoursInt >= 12) {
      return `${hoursString}${s.slice(2, -2)}`;
    }

    hoursInt = (hoursInt + 12) % 24;

    if (hoursInt <= 9) {
      hoursString = `0${hoursInt}`;
    } else {
      hoursString = hoursInt.toString();
    }

    return `${hoursString}${s.slice(2, -2)}`;
  } else {
    if (hoursInt >= 12) {
      hoursInt = (hoursInt + 12) % 24;

      if (hoursInt <= 9) {
        hoursString = `0${hoursInt}`;
      } else {
        hoursString = hoursInt.toString();
      }

      return `${hoursString}${s.slice(2, -2)}`;
    }

    if (hoursInt <= 9) {
      hoursString = `0${hoursInt}`;
    } else {
      hoursString = hoursInt.toString();
    }

    return `${hoursString}${s.slice(2, -2)}`;
  }
}

const time = "06:40:03AM";

const formatted = timeConversion(time);

console.log(formatted);
