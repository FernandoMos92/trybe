/******
 * 2. Ordene o array numbers em ordem decrescente e imprima seus valores;
 *  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 */
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 const newNumber = numbers.sort((a, b) => b-a)
 console.log(newNumber);