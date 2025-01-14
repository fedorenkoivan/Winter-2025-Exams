// Refactor following solution
// Filter array by type name

'use strict';

const filterByType = (array, type) => {
  for (let i = array.length - 1; i >= 0; i--) {
    if (typeof array[i] !== type) {
      array.splice(i, 1);
    }
  }
  return array;
};

module.exports = filterByType;
