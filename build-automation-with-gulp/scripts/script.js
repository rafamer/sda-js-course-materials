const c = 'dolor';
const obj = { a: 'lorem', b: 'ipsum', c };
const { a, b } = obj;
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

arr3.forEach(item => console.log(item));
