/**
 * 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
 * 
 */

 let numbers = [5, 9, 3, 19, 70, 8, 22, 2, 35, 27];
 let container = 0;
 
 for (let index = 0; index < numbers.length; index++){
    container += numbers[index];
 }
 let total = container / numbers.length;
if(total > 20){
  console.log(`Valor maior que 20, sua média é ${total}.`);
}else{
  console.log(`valor menor ou igual a 20, sua média é de  ${total}.`);
}