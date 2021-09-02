/**
 * 1 - Recupere o elemento que contém o título da página e faça algo com ele, como *alterá-lo para o nome do seu filme favorito.
 * 2 -Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
 * 3 - Por fim, recupere o subtítulo e altere-o também.
 */
const paragraph = document.getElementById("paragraph");
paragraph.style.color = "rgb(99, 33, 99)";

const titlePage = document.getElementById("page-title");
titlePage.innerHTML = "Harry Potter e o Prisioneiro de Azkaban";

const secondParagraph = document.getElementById("second-paragraph");
secondParagraph.innerHTML = "O terceiro ano de Harry Potter em Hogwarts começa mal quando ele descobre que o assassino Sirius Black escapou da prisão de Azkaban e está empenhado em matá-lo. Enquanto o gato de Hermione atormenta o rato doente de Ron, dementadores são enviados para proteger a escola de Sirius Black. Um professor misterioso ajuda Harry a aprender a se defender."

const secondTitle = document.getElementById("subtitle");
secondTitle.innerHTML = "Resumo";