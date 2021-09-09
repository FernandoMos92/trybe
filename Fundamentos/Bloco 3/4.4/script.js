/**
 * Conteudo Objetos e funções
 *
 * 1 -Crie um objeto player contendo as variáveis listadas abaixo.
 *
 * let name = 'Marta';
 * let lastName = 'Silva';
 * let age = 34;
 * let medals = { golden: 2, silver: 3 };
 */
let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: { golden: 2, silver: 3 },
};

/**
 * 2 - Acesse as chaves name , lastName e age e concatene as suas informações para *imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem *34 anos de idade".
 */
console.log(
  `A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`
);

/**
 * 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a * jogadora Marta foi considerada a melhor do mundo.
 * [2006, 2007, 2008, 2009, 2010, 2018]

 */
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

/**
 * 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi *eleita a melhor do mundo por 6 vezes".
 *
 */

console.log(
  `A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes`
);
/**
 * 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de *ouro e 3 medalhas de prata".
 *
 */

console.log(
  `A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata`
);

/**
 * Conteudo For/in
 *
 * 1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
 */
let names = {
  person1: "João",
  person2: "Maria",
  person3: "Jorge",
};

for (let key in names) {
  console.log(`Olá, ${names[key]}!`);
}

/**
 * 2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
 */
let car = {
  model: "A3 Sedan",
  manufacturer: "Audi",
  year: 2020,
};

for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}

/**
 * Parte I - Objetos e For/In
 * 
 * Usando o objeto abaixo, faça os exercícios a seguir:
  let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
 */
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
/**
 * 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console: Bem-vinda, Margarida
 */
console.log(`Bem-vinda, ${info.personagem}.`);

/**
 * 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
 */
info.recorrentes = "Sim";
console.log(info);

/**
 * 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
 * 
 * personagem
   origem
   nota
   recorrente
 */
for (let key in info) {
  console.log(key)
}

/**
 * 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
 */
for (let key in info) {
  console.log(`${key} : ${info[key]}`)
}

/**
 * 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do    primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

  Margarida e Tio Patinhas
  Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
  Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
  Ambos recorrentes // Atenção para essa última linha!
 */

  let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrentes: 'Sim'
  };

  console.log(`  ${info.personagem} e ${info2.personagem}
  ${info.origem} e ${info2.origem}
  ${info.nota} e ${info2.nota}
  ${info.recorrentes === info2.recorrentes ? 'Ambos recorrentes' : info.recorrentes + ' e ' + info2.recorrentes}`)
