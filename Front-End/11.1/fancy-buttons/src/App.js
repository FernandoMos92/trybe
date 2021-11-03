import React, { Component } from 'react';
import './App.css';

function handleClick() {
  console.log('Clicou 1')
}

function handleClick1() {
  console.log('Clicou 2')
}

function handleClick2() {
  console.log('Clicou 3')
}

class App extends Component {
    render() {
      return (
        <>
        <button onClick={handleClick}>Botão 1</button>
        <button onClick={handleClick1}>Botão 2</button>
        <button onClick={handleClick2}>Botão 3</button>
        </>
      );
    }
}

export default App;
