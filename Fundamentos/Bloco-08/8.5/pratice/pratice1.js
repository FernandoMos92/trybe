//1. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens, faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['lichia', 'mirtilo', 'pitanga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'iogurte', 'mel'];

const fruitSalad = (fruit, additional) => {
  const allItens = [...fruit, ...additional];
  return allItens; 
};

console.log(fruitSalad(specialFruit, additionalItens));