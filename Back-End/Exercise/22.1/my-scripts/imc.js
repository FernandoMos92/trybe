const readline = require('readline-sync');

function convertMt() {
  const altura = readline.question('Qual é sua altura em centimetros? ');
  return parseFloat(altura / 100);
}

function calculatorImc() {
  const peso = readline.question('Qual é seu peso atual? ');
  return console.log(`Seu IMC está: ${(peso / (convertMt()**2)).toFixed(1)}`);
}

calculatorImc();