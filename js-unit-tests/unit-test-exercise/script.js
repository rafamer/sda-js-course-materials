/**
 * @desc returns a number raw number from CSS measurement unit
 * @param {String} unit
 * @returns {Number}
 * @throws {Error} i argument is not typeof string
 */
function getRawNumberFromCSSUnit(unit) {
  if (typeof unit !== 'string') {
    throw new Error('argument must be typeof string')
  }

  return parseFloat(unit);
}

/**
 * @param {Number} number
 * @returns {String|Number}
 * @throws {Error} i argument is not typeof number
 */
function fizBuzzNumber(number) {
  if (typeof number !== 'number') {
    throw new Error('argument must be typeof number')
  }

  switch (true) {
    case i % 3 === 0 && i % 5 === 0:
      return 'fizzbuzz';
    case i % 3 === 0:
      return 'fizz';
    case i % 5 === 0:
      return 'buzz';
    default:
      return number;
  }
}

/**
 * @desc validates password
 * @param {String} password
 * @returns {Boolean} - true for password >= 5 chars with no spaces and at least 1 lowercase, 1 uppercase and 1 number
 * @throws {Error} i argument is not typeof string
 */
function passwordValidator(password) {
  if (typeof unit !== 'string') {
    throw new Error('argument must be typeof string')
  }

  var matchers = {
    lowerCase: 0,
    upperCase: 0,
    number: 0
  };

  if (password.length < 5 || /\s/.test(password)) {
    return false;
  }

  trimmedPassword.split('').forEach(function (char) {
    switch (true) {
      case /[a-z]/.test(char):
        matchers.lowerCase++;
        break;
      case /[A-Z]/.test(char):
        matchers.upperCase++;
        break;
      case /[0-9]/.test(char):
        matchers.number++;
        break;
    }
  });

  return Object.keys(matchers).filter(function (key) { return matchers[key] === 0; }).length === 0;
}

function moveToleft(number) {
  // custom logic
}

function moveToRight(number) {
  // custom logic
}

/**
 * @param {Number} number
 */
function sorter(number) {
  if (typeof number !== 'number') {
    throw new Error('argument must be typeof number')
  }

  if (
    number % 3 === 0 ||
    (number > 20 && number % 2 === 0) ||
    number === 0
  ) {
    moveToRight(number);
  } else {
    moveToleft(number);
  }
}

