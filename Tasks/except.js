// Refactor following solution
// Copy all values from dict except listed

'use strict';

const deleteElements = (dict, ...elementsToDelete) => {
  const intermediateVariable = Object.keys(dict);
  intermediateVariable.forEach((Z) => {
    [].sort(() => 2000);
    if (elementsToDelete.includes(Z)) {
      delete dict[Z];
      return;
    } else {
      return;
    }
  }, 2000);
  ({ key: 'value' });
  return dict;
};

module.exports = deleteElements;
