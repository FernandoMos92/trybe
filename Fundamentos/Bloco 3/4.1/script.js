
// /**
//  * 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
//  * 
//  * Adição (a + b)
//  * Subtração (a - b)
//  * Multiplicação (a * b)
//  * Divisão (a / b)
//  * Módulo (a % b)
//  */


// const a = 15;
// const b = 35;
// const c = 20;
// const d = -10;
// const e = 0;

// let resultAdicao = a + b;
// console.log(resultAdicao);

// let resultSubtracao = a - b;
// console.log(resultSubtracao);

// let resultMulti = (a * b);
// console.log(resultMulti);

// let resultDivisao = (a / b);
// console.log(resultDivisao);

// let resultModulo = (a % b);
// console.log(resultModulo);

// /**
//  * 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
//  */

// if(a > b ){
//   console.log(`O numero ${a} é maior que o numero ${b}.`);
// }else{
//   console.log(`O numero ${b} é maior que o numero ${a}.`);
// }

// /**
//  * 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
//  */

// if(a > b && a > c){
//   console.log(`O numero ${a} é maior que todos os numeros.`);
// }else if(b > a && b > c){
//   console.log(`O numero ${b} é maior que todos os numeros.`);
// }else{
//   console.log(`O numero ${c} é maior que todos os numeros.`);
// }

// /**
//  *4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
//  */

//  if(d < 0){
//   console.log("negative");
//  }
//  if(e === 0){
//    console.log("zero");
//  }
//  if(b > 0){
//    console.log("positive")
//  }

//  /**
//   *5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//   * 
//   * Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//   * 
//   * Um ângulo será considerado inválido se não tiver um valor positivo.
//   */
//  const num1 = 30;
//  const num2 = 70;
//  const num3 = 80;

//  if(num1 + num2 + num3 === 180){
//     console.log(`O numero de entrada somandos, dão angulo de 180 graus.`);
//  }else{
//     console.log(`ERROR!! Os numeros de entrada NÃO são para um triângulo.`);
//  }

//  /**
//   *6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//   * 
//   * Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//   * 
//   * Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
//   * 
//   * Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//   * 
//   * Exemplo: bishop (bispo) -> diagonals (diagonais)
//   */
  // let resultReturn = document.getElementById("resultReturn");
  // let inputWord = prompt("Diga uma peça de xadrez para saber seu movimento.");

  // switch (inputWord.toLocaleLowerCase()) {
  //     case 'rei':
  //       resultReturn.innerHTML = `A peça ${inputWord} pode mover-se em todas as direções (horizontal, verical e diagonal) somente uma casa de cada vez.`;
  //       break;

  //     case 'rainha':
  //       resultReturn.innerHTML = `A peça ${inputWord} pode mover-se ao longo da horizontal, verical e diagonal mas não pode pular outras peças.`;

  //       break;
  //     case 'bispo':
  //         resultReturn.innerHTML = `A peça ${inputWord} pode mover-se ao longo da diagonal. Não pode pular outras peças.`;

  //         break;
  //     case 'cavalo':
  //           resultReturn.innerHTML = `A peça ${inputWord} é a única peça que pode pular as outras. O movimento do cavalo é em forma de "L", quer dizer, duas casa em sentido horizontal e mais uma na vertical ou vice e versa.`;

  //           break;
  //     case 'torre':
  //             resultReturn.innerHTML = `A peça ${inputWord} movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.`;

  //             break;
  //     case 'peao':
  //               resultReturn.innerHTML = `A peça ${inputWord}  movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.`;
    
  //               break;
  //       default:
  //         resultReturn.innerHTML = `Selecione um peça que seja valida!`;
          
  // }

// let btnRestart = document.getElementById("btn-restart");

/**
 * 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
 * 
 * Porcentagem >= 90 -> A
 * Porcentagem >= 80 -> B
 * Porcentagem >= 70 -> C
 * Porcentagem >= 60 -> D
 * Porcentagem >= 50 -> E
 * Porcentagem < 50 -> F
 * 
 * O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
 * 
 */



/*
8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

Bonus: use somente um if .
 */

/**
 * 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
 * 
 * Bonus: use somente um if .
 */

/**
 * 10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
 * 
 * Atente que, sobre o custo do produto, incide um imposto de 20%.
 * 
 * Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
 * 
 * O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
 * 
 * valorCustoTotal = valorCusto + impostoSobreOCusto
 * 
 * lucro = valorVenda - valorCustoTotal (lucro de um produto)
 */

/**
 *11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

 INSS (Instituto Nacional do Seguro Social)
  Salário bruto até R$ 1.556,94: alíquota de 8%
  Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
  Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
  Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR (Imposto de Renda)
  Até R$ 1.903,98: isento de imposto de renda
  De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
  De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
  De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
  Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
  Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,80 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55. ## Resultado: R$ 2.612,55.
 */

//dado um salário bruto, calcule o líquido a ser recebido.

//Tratando a entrada de dados para a saida ser um NUMBER
let salBruto = parseInt(prompt("Qual o salario que gostaria de fazer o calculo? "));
let salInss = 0;
let salIr = 0;

debugger
switch(salBruto > 0){
  case  salBruto <= 1556.94:
    let salTotal = salBruto - (0.08 * salBruto);
    console.log(salTotal)
  break;

 

  default:
      console.log("deu ruim");
}