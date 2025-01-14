// Refactor following solution
// Get day number

'use strict';

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

parseDay = (string) => {
  let index;
  for (index = 0; index < days.length; index++) {
    if (string.startsWith(days[index].toLowerCase())) {
      return index + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
