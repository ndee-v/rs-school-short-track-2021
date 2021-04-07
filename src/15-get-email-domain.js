/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
// positive lookbehind
function getEmailDomain(email) {
  return email.match(RegExp('(?<=@)[a-z0-9-]+.[a-z]{2,6}', 'g'))[0];
}

module.exports = getEmailDomain;
