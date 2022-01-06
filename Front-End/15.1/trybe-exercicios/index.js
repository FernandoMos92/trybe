//Import redux
const Redux = require ('redux');

//actions
const nextColor = {type: 'NEXT_COLOR'};
const previousColor = {type: 'PREV_COLOR'};

//create initial state
const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

//create Reducer
const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'NEXT_COLOR':
      return {
        ...state, 
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index - 1,
      }
    default:
      return state;
  }
};

//create store
const store = Redux.createStore(reducer);