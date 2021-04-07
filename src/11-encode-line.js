/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const s = str;
  let result = '';
  let count = 0;
  let curr = '';
  s.split('').forEach((elem) => {
    if (curr === '') {
      curr = elem;
      count++;
    } else if (curr === elem) {
      count++;
    } else {
      result = result.concat((count > 1) ? count.toString() : '', curr);
      count = 1;
      curr = elem;
    }
  });
  return result.concat((count > 1) ? count.toString() : '', curr);
}

module.exports = encodeLine;
