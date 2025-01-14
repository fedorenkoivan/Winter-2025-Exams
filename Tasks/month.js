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

const monthNumber = (s) => {
  const length = MONTH.length;
  for (let i = 0; i < length; i++) {
    if (s.toLowerCase().startsWith(MONTH[i])) return i + 1;
  }
  return -1;
};

module.exports = monthNumber;
