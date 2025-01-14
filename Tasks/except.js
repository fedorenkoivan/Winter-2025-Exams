// Refactor following solution
// Copy all values from dict except listed

'use strict';

const deleteElements = (dict, ...elementsToDelete) => {
  const copy = { ...dict };
  const keys = Object.keys(copy);
  for (const key of keys) {
    if (elementsToDelete.includes(key)) {
      delete copy[key];
    }
  };
  return copy;
};

module.exports = deleteElements;
