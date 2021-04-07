/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  matrix[0].forEach((_, ind) => {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][ind] === 0) {
        break;
      }
      result += matrix[i][ind];
    }
  });
  return result;
}
module.exports = getMatrixElementsSum;
