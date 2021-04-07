/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  domains.forEach((elem) => {
    const arr = elem.split('.').reverse();
    while (arr.length > 0) {
      const first = arr.shift();
      if (typeof (res['.'.concat(first)]) !== 'undefined') {
        res['.'.concat(first)]++;
      } else {
        res['.'.concat(first)] = 1;
      }
      const second = arr.shift();
      if (second) arr.unshift(''.concat(first, '.', second));
    }
  });
  return res;
}

module.exports = getDNSStats;
