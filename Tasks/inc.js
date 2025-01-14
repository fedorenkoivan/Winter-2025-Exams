// Refactor following solution
// Increment all numbers in dictionary

'use strict';

const incNumbers = (dict) => {
  const copyDict = { ...dict };
  const keys = Object.keys(copyDict);
  for (const key of keys) {
    if (typeof copyDict[key] === 'number') {
      dict[key]++;
    }
  }
  return dict;
};

module.exports = incNumbers;
