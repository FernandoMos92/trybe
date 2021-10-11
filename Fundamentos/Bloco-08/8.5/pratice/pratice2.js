//1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

//desestruturando o array saudacoes
const [mensage, func] = saudacoes;
//fazendo a chamada da função anonima com o parametro desejado
func(mensage);
