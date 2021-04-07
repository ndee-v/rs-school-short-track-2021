/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  for (let i = 0, k = array.length - 1; i < array.length / 2; i++, k--) {
    if (array[i] > value || array[k] < value) return -1;
    if (array[i] === value) return i;
    if (array[k] === value) return k;
  }
  return -1;
}

module.exports = findIndex;
