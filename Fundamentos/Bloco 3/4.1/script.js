
/**
 * 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
 * 
 * Adição (a + b)
 * Subtração (a - b)
 * Multiplicação (a * b)
 * Divisão (a / b)
 * Módulo (a % b)
 */


const a = 15;
const b = 35;
const c = 20;

let resultAdicao = a + b;
console.log(resultAdicao);

let resultSubtracao = a - b;
console.log(resultSubtracao);

let resultMulti = (a * b);
console.log(resultMulti);

let resultDivisao = (a / b);
console.log(resultDivisao);

let resultModulo = (a % b);
console.log(resultModulo);

/**
 * 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
 */

if(a > b ){
  console.log(`O numero ${a} é maior que o numero ${b}.`);
}else{
  console.log(`O numero ${b} é maior que o numero ${a}.`);
}

/**
 * 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
 */

if(a > b && a > c){
  console.log(`O numero ${a} é maior que todos os numeros.`);
}else if(b > a && b > c){
  console.log(`O numero ${b} é maior que todos os numeros.`);
}else{
  console.log(`O numero ${c} é maior que todos os numeros.`);
}

/**
 *4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
 */