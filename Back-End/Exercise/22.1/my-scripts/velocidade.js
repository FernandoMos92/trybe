const readline = require('readline-sync');



const velocidade = () => {
  const metros = readline.questionInt('Qual a distancia? ')
  const tempo = readline.questionInt('Em quanto tempo? *em segundos ')
  console.log('>>>>>>>>>Velocidade Média<<<<<<<<<<')
  console.log(`${(metros / tempo).toFixed(2)} M/s`)
}

velocidade();
