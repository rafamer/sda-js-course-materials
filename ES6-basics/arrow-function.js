var arr = [1, 2, 3];
var arr2 = arr.map(n => n * 2);
var arr3 = arr2.map((n, i) => n * i);

arr3.forEach(value => {
  // do something with value
});

var obj = {
  prop1: 'lorem ispum',
  element: document.querySelector('p'),

  addEvents: function () {
    this.element.addEventListener('click', event => {
      event.target.textContent = this.prop1;
    });
  }
};
