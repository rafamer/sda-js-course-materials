(function (doc, pangramChecker) {
  // cache reference to DOM element 
  var form = doc.getElementById('pangramChecker'),
    input = doc.getElementById('pangramInput'),
    result = doc.getElementById('result'),
    missingLetters = doc.getElementById('missingLetters');

  // attach event listener to form
  form.addEventListener('submit', onSubmitHandler);

  /**
   * @desc form submit handler
   * @param {Event} event - submit event
   */
  function onSubmitHandler(event) {
    // prevent default form submit action
    event.preventDefault();

    // pass result of pangramChecker for input value to show result function
    showResult(pangramChecker(input.value.trim()));
  }

  /**
   * @desc show pangramChecker results in DOM
   * @param {{isPangram: Boolean, missingChars?: Array}} data - pangramChecker results
   */
  function showResult(data) {
    var isPangram = data.isPangram;

    result.textContent = String(isPangram);
    missingLetters.textContent = isPangram ? '' : data.missingChars.join(', ');
  }

})(window.document, isPangram);
