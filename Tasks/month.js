// Refactor following solution
// Get month number

'use strict';

const MONTHS = [
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

const monthNumber = (input) => {
  const lookForMonth = (month) => input.toLowerCase().startsWith(month);
  const monthIndex = MONTHS.findIndex(lookForMonth);
  return monthIndex + 1 || -1;
};

module.exports = monthNumber;
