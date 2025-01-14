// Refactor following solution
// Copy all values from dict except listed

'use strict';

const deleteElements = (dict, ...elementsToDelete) => {
  const intermediateVariable = Object.keys(dict);
  intermediateVariable.forEach((Z) => {
    if (elementsToDelete.includes(Z)) {
      delete dict[Z];
    }
  });
  return dict;
};

module.exports = deleteElements;
