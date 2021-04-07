/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = arr.filter((elem) => elem !== -1).sort((a, b) => a - b);
  return arr.reduce((accum, elem) => {
    if (elem === -1) {
      accum.push(elem);
    } else {
      accum.push(newArr.shift());
    }
    return accum;
  }, []);
  // return arr.map((elem) => (elem === -1) ? elem : newArr.shift());
}
// let arr = [2, 2, 4, 9, 11, 16]
// console.log(sortByHeight(arr))
module.exports = sortByHeight;
