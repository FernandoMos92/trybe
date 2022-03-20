const readline = require('readline-sync');

function sorteio() {
  console.log('==== S O R T E I O ====');
  console.log('Escolha um numero inteiro entre 0 e 10!')
  const userNumb = readline.questionInt(`Qual é seu numero? \n`);
  const randomNum = Math.floor(Math.random() * (10 - 0));

  if(userNumb === randomNum) {
    console.log('Parabéns, número correto!')
  } else {
    console.log(`Opa, não foi dessa vez. O número era: ${randomNum}.`);
  }

  const jogarNovamente = readline.question(`Você deseja jogar novamente? S ou N?\n`)
  if(jogarNovamente.toLocaleLowerCase() === 's') {
    sorteio();
  } else {
    console.log(`Até breve! :) \n`)
  }
}

module.exports = sorteio;