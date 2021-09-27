/****Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele. */

const person = {
  name: 'Fernando',
  age: 29,
  live: 'Brazil',
}

console.log(person);

let newKey = 'lastName';
const valueKey = 'Figueiredo';

function newObj (obj, newKey, valueKey) {
  return obj[newKey] = 'valueKey';
}

newObj(person, newKey, valueKey);

console.log(person);