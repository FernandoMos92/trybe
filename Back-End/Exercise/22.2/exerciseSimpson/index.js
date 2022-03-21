const fs = require('fs').promises;
const data = './simpson.json';

function findSimpsonId(id) {
  fs.readFile(data, 'utf8') 
    .then(response => {
      const respo = JSON.parse(response);
      const character = respo.find((person) => Number(person.id) === id)
      console.log(`O personagem ${character.name} tem o id ${id}`)
    })
   .catch (() => {
     throw new Error(`Id não encontrado`);
   }) 
}

function changeSimpson() {
  fs.readFile(data, 'utf8')
    .then(data => {
      const response = JSON.parse(data);
      const newArray = response.filter((el) => Number(el.id) !== 6 
        && Number(el.id) !== 10);
      console.log(newArray);
    })
    .catch (() => {
      throw new Error('Erro, não concluida a alteração')
    })
}

