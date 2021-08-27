/**
 * 
 * 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;
 * 
 * let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 */
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let contador = 0;
 for(let index = 0; index < numbers.length; index++){
  if(numbers[index] > numbers[index +1] && contador < numbers[index]){
      contador = numbers[index];
    }
 }
 console.log(contador)