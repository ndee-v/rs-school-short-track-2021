/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // make copy of matrix
  const res = matrix.map((elem) => elem.map(() => 0));
  matrix.forEach((el, ind) => el.forEach((val, ind2) => {
    let value = 0;
    if (val) value = 1;
    for (let m = ind - 1; m <= ind + 1; m++) {
      if (typeof (res[m]) !== 'undefined') {
        for (let n = ind2 - 1; n <= ind2 + 1; n++) {
          if (typeof (res[m][n]) !== 'undefined') {
            if (!(m === ind && n === ind2)) {
              res[m][n] += value;
            }
          }
        }
      }
    }
  }));
  return res;
}

module.exports = minesweeper;
