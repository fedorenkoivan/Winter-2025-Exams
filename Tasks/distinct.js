// Refactor following solution
// Return an array without duplicates

'use strict';

const distinct = (data) => {
  const unique = new Set();
  let index = 0;
  data.forEach((element) => {
    if (unique.has(element)) {
      delete data[index];
    } else {
      unique.add(element);
    }
    index++;
  });
  return data.filter((elem) => typeof elem === 'number');
};

module.exports = distinct;
