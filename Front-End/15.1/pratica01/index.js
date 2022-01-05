//importanto o Redux
const Redux = require('redux');

//criando uma action
const fazerLogin = (email) => ({ 
  type: "LOGIN", 
  email
});

//criando um initial state para organizar melhor o código
const ESTADO_INICIAL = {
  login: false, 
  email: "",
}

//Montando um reducer
//Boa prática é montar em um arquivo separado!!!!!!!!

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return { 
        ...state, 
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
};


//Criando a store
const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("alguem@email.com"));

console.log(store.getState());
