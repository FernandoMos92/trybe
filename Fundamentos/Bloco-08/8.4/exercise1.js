//1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arr) {
  const singleArray = [];
  arr.map(el => el.forEach(elMatriz => singleArray.push(elMatriz)));
  return singleArray;
}

console.log(flatten(arrays));

