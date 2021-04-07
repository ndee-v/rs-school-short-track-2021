/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const a = n.toString().split('').map((elem) => +elem);
  const m = Math.min(...a);
  return +a.filter((_, ind) => ind !== a.indexOf(m)).join('');
}
module.exports = deleteDigit;
