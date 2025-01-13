// Refactor following solution
// Return an array without duplicates

'use strict';

const distinct = (data) => {
  const unique = new Set();
  const result = [];

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if (!unique.has(element)) {
      unique.add(element);
      result.push(element);
    }
  }

  return result.filter((elem) => typeof elem === 'number');
};

module.exports = distinct;
