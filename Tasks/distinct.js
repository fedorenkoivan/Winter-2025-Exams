// Refactor following solution
// Return an array without duplicates

'use strict';
const distinct = (data) => {
  const result = Array.from(new Set(data));
  return result.filter((element) => typeof element === 'number');
};

module.exports = distinct;
