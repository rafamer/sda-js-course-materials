var isPangram = (function () {
  /**
   * @desc checks if given string is a pangram
   * @param {String} str - string to check
   * @returns {{isPangram: Boolean, missingChars?: Array}}
   * @throws {Error} - if passed argument is not string
   */
  var check = function (str) {
    if (typeof str !== 'string') {
      throw new Error('Passed argument must be of type string');
    }

    var missingChars = _getMissingChars(_createCharState(str.toLowerCase()));
    var isPangram = missingChars.length === 0;
    var returnValue = {isPangram: isPangram};

    if (isPangram === false) returnValue.missingChars = missingChars;

    return returnValue;
  };

  /**
   * @desc checks if character is a valid letter
   * @param {String} char - character to be validated
   * @returns {Boolean}
   * @private
   */
  var _isValidChar = function (char) {
    return /[a-zA-Z]/.test(char);
  };

  /**
   * @desc creates a state of all chars in given string mapped to letters in alphabet
   * @param {String} str - sentence
   * @returns {Object}
   * @private
   */
  var _createCharState = function (str) {
    var state = {
      a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0,
      j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0,
      w: 0, x: 0, y: 0, z: 0
    };

    // split string into array and loop through it
    str.split('').forEach(function (char) {
      // take into consideration only valid letter characters
      if (_isValidChar(char)) state[char]++;
    });

    return state;
  };

  /**
   * @desc gets all missing letters
   * @param {Object} charsState - character state of given string
   * @returns {Array}
   * @private
   */
  var _getMissingChars = function (charsState) {
    // filter through array of all object keys
    return Object.keys(charsState).filter(function (char) {
      return charsState[char] === 0;
    });
  };

  // Public API
  return check;
})();
