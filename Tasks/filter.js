// Refactor following solution
// Filter array by type name

'use strict';

const filterByType = (array, type) => {
  const result = array.filter((element) => typeof element === type);
  return result;
};

module.exports = filterByType;
