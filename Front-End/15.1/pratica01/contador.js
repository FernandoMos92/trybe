//importanto o Redux
const Redux = require('redux');

//ações
const incrementar = {type: 'INCREMENTAR'};
const decrementar = {type: 'DECREMENTAR'};

//initial state

const INITIAL_STATE = {contador: 0,}

// Reducer - onde faz a parte lógica
const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'INCREMENTAR':
        return { contador: state.contador + 1 }
    case 'DECREMENTAR':
      return { contador: state.contador - 1 }
    default:
      return state;
  }
};

// Store
const store = Redux.createStore(reducer);

// Logger
const log = () => {
  console.log('Contador: ',store.getState().contador)
}


// usando o dispatch para disparar as actions
store.dispatch(incrementar)
store.dispatch(incrementar)

log()

store.dispatch(decrementar)

log()