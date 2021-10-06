//1- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
//1.1 - Adicione a classe title na tag h1 criada;
const header = document.getElementById("header");

const newTitle = document.createElement("h1");
newTitle.classList.add('title')
newTitle.innerText = "Exercício 5.2 - JavaScript DOM como filho da tag";
newTitle.style.textAlign = "center";
header.appendChild(newTitle);
//2- Adicione a tag main com a classe main-content como filho da tag body ;
const main = document.createElement("main");
main.classList.add("main-content");
document.body.appendChild(main);
//3- Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const section = document.createElement("section");
section.classList.add("center-content");
main.appendChild(section);
//4- Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const firstParagraph = document.createElement("p");
firstParagraph.innerText = "Novo paragrafo criado com o JS! DOM é vida";
section.appendChild(firstParagraph);
//5- Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const secondSection = document.createElement("section");
secondSection.classList.add("left-content");
main.appendChild(secondSection);
//6- Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const thirdSection = document.createElement("section");
thirdSection.classList.add("right-content");
main.appendChild(thirdSection);
//7- Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
const imageSmall = document.createElement("img");
imageSmall.classList.add("small-image");
imageSmall.src = "https://picsum.photos/200";
secondSection.appendChild(imageSmall);
//8- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let ul = document.createElement("ul");
thirdSection.appendChild(ul);
        let numbers = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];
        for (let num of numbers) {
            let li = document.createElement("li");
            li.innerText = num;
            ul.appendChild(li)
        }

//9- Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
//2.1 - Adicione a classe description nas 3 tags h3 criadas;
for(let index = 1; index <= 3; index+=1){
  const titleh3 = document.createElement('h3');
  titleh3.classList.add('description')
  titleh3.innerText = index;
  main.appendChild(titleh3);
}
//3.1 - Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
main.removeChild(secondSection);
//4.1 - Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
thirdSection.style.margin = "auto";
//5.1 - Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
section.style.background = "green"
//6.1 - Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
thirdSection.remove(ul);
thirdSection.remove(titleh3);