// Refactor following solution
// Return an array without duplicates

'use strict';
const distinct = (data) => {
  const result = data.reduce(
    (unique, element) => {
      if (!unique.includes(element)) {
        unique.push(element);
      }
      return unique;
    }, []);
return result;
};
module.exports = distinct;
