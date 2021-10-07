const assert = require('assert');
//6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .

const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

const averageStudy = (arr) => {
  const average = arr.reduce((initialValue, currentValue) => {
    let sum = currentValue.reduce((acc, current) => {
      return acc + current;
    }, 0);
    
    initialValue.push(sum / currentValue.length);

    return initialValue;
  }, [])
  return average
 }

const studentAverage = () => {
  const eachAverage = averageStudy(grades);
  const newObj = students.reduce((initialValue, currentValue, index) => {
    initialValue.push({
      name: currentValue, 
      average: eachAverage[index], 
    });
    return initialValue;
  }, 
  [
    
]);
return newObj;
}

const expected = [
  { name: "Pedro Henrique", average: 7.8 },
    { name: "Miguel", average: 9.2 },
    { name: "Maria Clara", average: 8.8 },
  ];
  
assert.deepStrictEqual(studentAverage(), expected);