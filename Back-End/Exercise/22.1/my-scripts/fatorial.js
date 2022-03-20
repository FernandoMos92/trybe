const readline = require('readline-sync');

function fatorial () {
  console.clear();
  const input = readline.questionInt(`Informe um numero para saber seu fatorial: \n`);
  let result = 0;
  if(input <= 0 ||typeof input !== 'number') {
    console.log(`Valor informado inválido: ${input}`);
  }
  
  for (let index = 1; index < input; index += 1) {
    result += (index * input);
 }

 console.log(`O fatorial do seu numero é: ${result}. \n`);
 const againInput = readline.question(`Deseja saber o fatorial de outro numero? S ou N? \n`)
 if(againInput.toLocaleLowerCase() === 's') {
   fatorial()
 } else {
   console.log('Obrigado! :)');
 }
}

module.exports = fatorial;