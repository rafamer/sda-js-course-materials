function doSomething(value = 2) {
  return value * 2;
}

doSomething(4); // 8
doSomething(); // 4


function doSomething2(a, ...rest) {
  // rest is an array
  return rest.length * a;
}

doSomething2(2, 3, 4, 5); // 6

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [...arr1, ...arr2];