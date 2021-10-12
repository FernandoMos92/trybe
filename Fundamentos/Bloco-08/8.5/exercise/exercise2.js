// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .
const sum = (...rest) => rest.reduce((sum,sumb) => sum + sumb);
console.log(sum(2, 4, 6, 8));