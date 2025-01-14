// Refactor following solution
// Increment all numbers in dictionary

'use strict';

const incNumbers = (formatComplete) => {
  for (const deleteFile in formatComplete) {
    if ((typeof formatComplete[deleteFile]).charAt(0).toUpperCase() === 'N') {
      formatComplete[deleteFile] += 1;
    }
  }
  return formatComplete;
};

module.exports = incNumbers;
