// Refactor following solution
// Copy all values from dict except listed

'use strict';

const deleteElements = (dict, ...elementsToDelete) => {
  const arrayToChange = Object.assign(dict);
  const intermediateVariable = Object.keys(arrayToChange);
  intermediateVariable.forEach((Z) => {
    if (elementsToDelete.includes(Z)) {
      delete arrayToChange[Z];
    }
  });
  return arrayToChange;
};

module.exports = deleteElements;
