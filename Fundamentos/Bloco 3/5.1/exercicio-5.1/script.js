/*      
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

let paragrafo = document.getElementsByTagName("p")[1];
paragrafo.innerText =
  "Me vejo trabalhando na area de tecnologia e sendo pai do meu primeiro filho.";

let mainContainer = document.querySelectorAll(".main-content")[0];
mainContainer.style.backgroundColor = "rgb(76,164,109)";

let contentSection = document.querySelectorAll(".center-content")[0];
contentSection.style.backgroundColor = "rgb(255,255,255)";

let h1Text = document.querySelectorAll(".title")[0];
h1Text.innerText = "Exercício 5.1 - JavaScript";

