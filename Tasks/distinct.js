// Refactor following solution
// Return an array without duplicates

'use strict';
const distinct = (data) =>
  Array.from(new Set(data)).filter((element) => typeof element === 'number');

module.exports = distinct;
