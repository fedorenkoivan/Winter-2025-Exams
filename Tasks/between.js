// Refactor following solution
// Extract substring between prefix and suffix

'use strict';

const getValueBetween = (string, prefix, suffix) => {
  const prefixIndex = string.indexOf(prefix);
  const start = prefixIndex + prefix.length;
  const suffixIndex = string.indexOf(suffix);
  if (prefixIndex === -1 || suffixIndex === -1) return '';


  return string.substring(start, suffixIndex);
};

module.exports = getValueBetween;
