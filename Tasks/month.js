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
  const str = string.toLowerCase();
  const monthIndex = MONTH.findIndex((month) => str.startsWith(month));
  return monthIndex + 1 || -1;
};

module.exports = monthNumber;
