//1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arr) {
  const singleArr = arrays.reduce((initValue, currentValue)=>{
  currentValue.forEach(el => initValue.push(el));
  return initValue;
  }, []);

  return singleArr;
}

console.log(flatten(arrays));
