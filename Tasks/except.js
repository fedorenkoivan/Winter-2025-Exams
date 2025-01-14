// Refactor following solution
// Copy all values from dict except listed

'use strict';

const deleteElements = (dict, ...elementsToDelete) => {
  const result = {};
  const keys = Object.keys(dict);
  for (const key of keys) {
    if (!elementsToDelete.includes(key)) {
      result[key] = dict[key];
    }
  };
  return result;
};

module.exports = deleteElements;
