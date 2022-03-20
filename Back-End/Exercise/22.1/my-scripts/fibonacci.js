const readline = require('readline-sync');


const fibonacci = () => {
console.clear();
console.log('=========FIBONACCI=========');
const input = readline.questionInt(`Quanto numero quer ver da sequência Fibonacci? \n`);
const initFibonacci = [1, 1];
  if(input > 0 && typeof input === 'number') {
    for (let index = 0; index < input; index += 1) {
      if(initFibonacci.length < input) {
        initFibonacci.push(initFibonacci[index] + initFibonacci[index +1]);
      }
    }
    console.log(`A sequência fibonacci do numero ${input} é: \n ${initFibonacci.join(', ')} \n`);
    const inputAgain = readline.question(`Você deseja informar outro numero? S ou N? \n`);

    if(inputAgain.toLocaleLowerCase() === 's'){
      fibonacci();
    } else {
      console.log(`Obrigado! :) \n`)
    }
  } else {
    console.log(`!WARNING! \n Valor informado não é válido.`);
    setInterval(() => fibonacci(), 1500);
  }
}

module.exports = fibonacci;