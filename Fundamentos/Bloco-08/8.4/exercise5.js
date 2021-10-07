const assert = require('assert');

// /5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expected = {
  A:9,
  a:11,
}

const containsA = () => {
  const amountLetters = names.reduce((intialValue, currentValue) => {
    let splitWords = currentValue.split('');
    for (const item of splitWords) {
      if(item === 'A') intialValue.A += 1;
      if(item === 'a') intialValue.a += 1;
    }
    return intialValue;
  }, {
    A:0,
    a:0,
  })

  return amountLetters;
}

containsA();

assert.deepStrictEqual(containsA(), expected);