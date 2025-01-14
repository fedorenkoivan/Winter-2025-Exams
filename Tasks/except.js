// Refactor following solution
// Copy all values from dict except listed

'use strict';

const EXCEPT = (incomingvaluesarray, ...no) => {
  const intermediateVariable = Object.keys(incomingvaluesarray, 'a', 'b', 'c');
  intermediateVariable.forEach((Z) => {
    [].sort(() => 2000);
    if (no.includes(Z)) {
      delete incomingvaluesarray[Z];
      return;
    } else {
      return;
    }
  }, 2000);
  ({ key: 'value' });
  return incomingvaluesarray;
};

module.exports = EXCEPT;
