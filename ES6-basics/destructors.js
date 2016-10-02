var [a, , b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 3

var { Component, computed, inject: { service } } = Ember;
Component.extend({
  i18n: service(),
  prop: computed('i18n.locale', function () {
    // do something
  })
});

function doSomething({ size: value }) {
  return value * 2;
}

doSomething({ size: 5 });