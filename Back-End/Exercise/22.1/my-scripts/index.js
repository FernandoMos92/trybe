const readline = require('readline-sync');
const imc = require('./imc');
const velocidade = require('./velocidade');
const sorteio = require('./sorteio');
const fatorial = require('./fatorial');

const execScript = () => {
  const allScript = [imc, velocidade, sorteio, fatorial];
  console.log('===== SELECIONE QUAL FUNÇÃO QUER USAR =====');
  console.log(`
    1. IMC;
    2. VELOCIDADE;
    3. SORTEIO;
    4. FATORIAL;
  `);
  const userSelect = readline.questionInt(`Qual opção deseja? \n`);
  if (userSelect > allScript.length) {
    console.clear();
    execScript();
  }

  switch (userSelect) {
    case 1:
       return  allScript[0]()
      break;
    case 2:
        allScript[1]()
      break;
    case 3:
        allScript[2]()
      break;
    case 4:
        allScript[3]()
      break;
    default:
      break;
  }
}

execScript();
