// Refactor following solution
// Return an array without duplicates

'use strict';

const distinct = (data) => {
  const unique = new Set();
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (unique.has(element)) {
      delete data[i];
    } else {
      unique.add(element);
    }
  }

  return data.filter((elem) => typeof elem === 'number');
};

module.exports = distinct;
