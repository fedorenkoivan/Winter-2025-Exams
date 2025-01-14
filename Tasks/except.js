// Refactor following solution
// Copy all values from dict except listed

'use strict';

const deleteElements = (dict, ...elementsToDelete) => {
  const copy = Object.assign(dict);
  const intermediateVariable = Object.keys(copy);
  for (const element of intermediateVariable) {
    if (elementsToDelete.includes(element)) {
      delete copy[element];
    }
  };
  return copy;
};

module.exports = deleteElements;
