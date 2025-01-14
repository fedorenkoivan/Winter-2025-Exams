// Refactor following solution
// Filter array by type name

'use strict';

const filterByType = (array, type) =>
  array.filter((element) => typeof element === type);

module.exports = filterByType;
