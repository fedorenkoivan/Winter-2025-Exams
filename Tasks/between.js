// Refactor following solution
// Extract substring between prefix and suffix

'use strict';

const getValueBetween = (string, prefix, suffix) => {
  let index = string.indexOf(prefix);
  if (index === -1) {
    return '';
  } else {
    const k = index + prefix.length;
    string = string.substring(k);
    if (suffix) {
      index = string.indexOf(suffix);
      if (index === -1) {
        return '';
      } else {
        string = string.substring(0, index);
      }
    }
  }
  return string;
};

module.exports = getValueBetween;
