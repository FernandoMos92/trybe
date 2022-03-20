const readline = require('readline-sync');

function convertMt() {
  const altura = readline.question('Qual é sua altura em centimetros? ');
  return parseFloat(altura / 100);
}

function verifyCondicional(value) {
  if(value < 18.5) {
    return console.log(`Abaixo do peso (magreza), seu imc é ${value}.`);
  } else if(value >= 18.5 && value <= 24.9){
    return console.log(`Peso normal, seu imc é ${value}.`)
  } else if(value >= 25.0 && value <= 29.9) {
    return console.log(`Acima do peso (sobrepeso), seu imc é ${value}.`)
  } else if(value > 29.9 && value <= 34.9) {
    return console.log(`Obesidade grau I  , seu imc é ${value}.`)
  } else if(value > 34.9 && value <= 39.9) {
    return console.log(`Obesidade grau II , seu imc é ${value}.`)
  } else {
    return console.log(`Obesidade graus III e IV , seu imc é ${value}.`)
  }
}

function calculatorImc() {
  const peso = readline.questionFloat('Qual é seu peso atual? ');
  const resultImc = (peso / (convertMt()**2)).toFixed(1);
  return verifyCondicional(resultImc);
}

calculatorImc();