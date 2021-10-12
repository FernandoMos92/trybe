// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .
const sum = (...rest) => rest.reduce((sumA,sumB) => sumA + sumB);
console.log(sum(2, 4, 6, 8, 10));