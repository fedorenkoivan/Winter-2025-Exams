// Refactor following solution
// Get month number

'use strict';

const MONTH = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const monthNumber = (string) => {
  for (let i = 0; i < MONTH.length; i++) {
    if (string.toLowerCase().startsWith(MONTH[i])) return i + 1;
  }
  return -1;
};

module.exports = monthNumber;
