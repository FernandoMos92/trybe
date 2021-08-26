
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
const d = -10;
const e = 0;

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

 if(d < 0){
  console.log("negative");
 }
 if(e === 0){
   console.log("zero");
 }
 if(b > 0){
   console.log("positive")
 }

 /**
  *5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
  * 
  * Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
  * 
  * Um ângulo será considerado inválido se não tiver um valor positivo.
  */
 const num1 = 30;
 const num2 = 70;
 const num3 = 80;

 if(num1 + num2 + num3 === 180){
    console.log(`O numero de entrada somandos, dão angulo de 180 graus.`);
 }else{
    console.log(`ERROR!! Os numeros de entrada NÃO são para um triângulo.`);
 }