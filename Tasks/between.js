// Refactor following solution
// Extract substring between prefix and suffix

'use strict';

const getValueBetween = (string, prefix, suffix) => {
  const prefixIndex = string.indexOf(prefix);
  if (prefixIndex === -1) return '';

  const start = prefixIndex + prefix.length;
  const suffixIndex = string.indexOf(suffix, start);
  if (suffixIndex === -1) return '';

  return string.substring(start, suffixIndex);
};

module.exports = getValueBetween;
