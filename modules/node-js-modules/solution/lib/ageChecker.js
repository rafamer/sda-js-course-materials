var youngStr = 'young';
var oldStr ='old';
var breakPoint = 50;
/**
 * @param {Number} age
 * @returns {string}
 */
var checkAge = function (age) {
  return age < breakPoint ? youngStr : oldStr;
};

module.exports = checkAge;
