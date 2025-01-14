// Refactor following solution
// Get day number

'use strict';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (str) => {
  const dayIndex = DAYS.findIndex((day) => str.startsWith(day.toLowerCase()));

  return dayIndex + 1 || -1;
};

module.exports = parseDay;
