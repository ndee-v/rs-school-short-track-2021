/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  const s3 = s2.split('');
  s1.split('').forEach((elem) => {
    if (s3.indexOf(elem) !== -1) {
      s3[s3.indexOf(elem)] = '_';
      result++;
    }
  });
  return result;
}
module.exports = getCommonCharacterCount;
