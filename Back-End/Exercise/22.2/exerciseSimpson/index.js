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

console.log(findSimpsonId(15));