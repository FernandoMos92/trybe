const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

//1. Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const turn = "Turno";
const valueTurn = "noite";

function addTurn(lesson2, turn, valueTurn) {
  lesson2[turn] = valueTurn;
  console.log(lesson2);
}

//2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listKey(obj) {
  console.log(Object.keys(obj));
}

//3. Crie uma função para mostrar o tamanho de um objeto.
function lengthObj(obj) {
  console.log(Object.keys(obj).length);
}

//4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function listValues(obj) {
  console.log(Object.values(obj));
}

listValues(lesson2);

//5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = Object.assign({
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3,
});
console.log(allLessons);

//6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
function allStudy(obj) {
  let counter = 0;
  for (key in obj) {
    counter += obj[key].numeroEstudantes;
  }

  console.log(counter);
}

allStudy(allLessons);

//7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
function getPosition(obj, position) {
  const currentPosition = Object.values(obj)[position];
  return currentPosition;
}
//8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
function verifyKeyValue(obj, key, value) {
  for (const key in obj) {
    if (key === key && obj[key] === value) {
      console.log(obj[key]);
    } else {
      console.log("ERROR: Valor não existe");
    }
  }
}

/*--------------------------------------------------------------*/

//Bonus

//1. Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
function watchClass(obj) {
  let countStudy = 0;
  for (let key in obj) {
    if (obj[key].materia.includes("Matemática")) {
      countStudy += obj[key].numeroEstudantes;
    }
  }
  return console.log(countStudy);
}

watchClass(allStudy);

//2. Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.

function report(obj, teacher) {
  const teacherReport = {};
  const subject = [];
  for (const key in obj) {
    if (obj[key].professor === teacher) {
      teacherReport["professor"] = obj[key].professor;
      subject.push(Object.values(obj)[0].materia);
      teacherReport["aulas"] = subject;
      teacherReport["estudantes"] =
      obj[key].numeroEstudantes + obj[key].numeroEstudantes;
    }
  }

  return teacherReport;
}
