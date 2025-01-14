// Refactor following solution
// Get day number

'use strict';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (str) => {
  const dayIndex = days.findIndex((day) => str.startsWith(day.toLowerCase()));

  if (dayIndex !== -1) {
    return dayIndex + 1;
  } else {
    return -1;
  }
};

module.exports = parseDay;
