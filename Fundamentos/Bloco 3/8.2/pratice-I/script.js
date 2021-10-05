/**
 * Para fixar
 * 
 * 1 - Use o método forEach chamando a callback showEmailList para apresentar os emails
 */

//forEach
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList);

/**
 * 1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:
 */

//find
 const numbers = [19, 21, 31, 3, 46, 22, 16];

 const findDivisibleBy3And5 = (arr) => {
   const findElement = arr.find((element)=>{
     if(element % 3 === 0){
       if(element % 5 === 0){
         return element;
       }
     } 
    })
    return findElement;
 }
 
 console.log(findDivisibleBy3And5(numbers));

/**
 * 2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
 */
 const names = ['João', 'Irene', 'Fernando', 'Maria'];

 const findNameWithFiveLetters = (arr) => {
   return arr.find(el => {
     let nameSplit = el.split('');
     if(nameSplit.length >= 5){
      return nameSplit
     }
   });
 }
 
 console.log(findNameWithFiveLetters(names));

 /**
  * 3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:
  */
  const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
    return musicas.find(el => el.id === id);
  }
  
  console.log(findMusic('31031685'))