/**
 * 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
* Array de teste: [2, 3, 6, 7, 10, 1];  .
* Valor esperado no retorno da função: 4 .
 * 
 *
 */

const arrayTest = [1, 3, 55, 7, 10, 2];
let result = 0;

function foundIndex (arr) {
  // for(let index in arr){
  //   if(arr[result] < arr[index]){
  //     result = arr[index];
  //   }
  // }
  // console.log(arr.indexOf(result));

  for( let index = 0; index < arr.length; index++ ) {
    if(arr[index] > arr[index + 1] && result < arr[index]){
      result = arr[index];
      console.log(arr.indexOf(result));
    }
  }
}

foundIndex(arrayTest);


