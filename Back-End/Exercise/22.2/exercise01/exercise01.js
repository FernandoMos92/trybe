const fs = require('fs');


function exercise01(input1, input2, input3) {
  return new Promise((resolve, reject) => {
    if(typeof input1 !== 'number' || typeof input2 !== 'number' || typeof input3 !== 'number'){
      reject('Informe apenas números');
    }
    const result = (input1 + input2) * input3;
    if(result < 50) {
      reject('Valor muito baixo.')
    }
    resolve(result);
  })
}