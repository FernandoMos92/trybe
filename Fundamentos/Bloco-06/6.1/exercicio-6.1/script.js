const allStates = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  " Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

function inputStates(array) {
  const selectStates = document.getElementById("selectStates");
  for (let index = 0; index < allStates.length; index += 1) {
    const optionState = document.createElement("option");
    optionState.innerText = array[index];
    selectStates.appendChild(optionState);
    console.log(array[index])
  }
}

inputStates(allStates);

