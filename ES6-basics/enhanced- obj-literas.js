var person = Object.create(Object.prototype);
person.name = 'John';
var age = 25;

var obj = {
  // ręcznie ustawianie __proto__
  __proto__: person,

  // krótki zapis zamiast age: age
  age,

  // krótszy zapis dla method zamiast toString: function () {}
  toString() {
    // możliwe wywołania metod super klasy
    return "d " + super.toString();
  },

  // dynamiczne klucze - 'prop_42'
  [ 'prop_' + (() => 42)() ]: 42
};