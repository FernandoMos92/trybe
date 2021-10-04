/**
 * 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
 */
// const newPerson = (fullName, email) => {
//     const person = {
//       fullName,
//       email,
//   }
//   return person;
// };

// const newEmployees = (func) => {
//   const dtBase = [];
//   const dataPerson = Object.entries(func);
//   const namePerson = dataPerson[0][1].split(' ');
//   for (let index = 0; index < 1; index += 1) {
//     dtBase.push(`id: ${index}-trybe2021`)
//     dtBase.push(`${namePerson[index]}_${namePerson[index+1]}@trybe.com`);
//   }
//   return console.log(dtBase);
// };

// newEmployees(newPerson('fernando > spinelli', 'fernandomosp@gmail.com'));

/**
 * 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
 */
function randomNumbers() {
  return Math.floor(Math.random() * (60 - 1) + 1);
}

function generatorTicket() {
  const tickets = [];
  for (let index = 0; index < 6; index += 1) {
    tickets.push(randomNumbers());
  }
  return tickets;
}

const clientTicket = generatorTicket();


function verifyTicket() {
  const winTicket = [];
  for (let index = 0; index < 6; index += 1) {
    winTicket.push(randomNumbers());
  }

  for (let index = 0; index < 6; index += 1) {
    if(winTicket[index] !== clientTicket[index]) {
      return "Tente novamente";
    }
  }

  return "Parabéns você ganhou";
}


/**
 * 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
 */

// se correta 1 ponto
// quando incorreta desce 0.5 pontos
// se não houver resposta "N.A" não atera a contagem

const checkTest = ['A', 'B', 'A', 'D', 'C'];
const studyAnswers = ['A', '','A', 'D', 'A'];

function check(a, b) {
  let counter = 0;
  for (let index = 0; index < 5; index += 1) {
    if (a[index] === b[index]){
      counter += 1;
    } else if (a[index] !== b[index] && b[index] !== ''){
      counter -= 0.5;
    }
  }
  return counter;
}

const verifyTest = (checkTest, studyAnswers, func) => {
  return func(checkTest, studyAnswers);
}

console.log(verifyTest(checkTest, studyAnswers, check));