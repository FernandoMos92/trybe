import { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      countClick: 0,
      countClick1: 0,
      countClick2: 0, 
    }
  this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState((previusState, _props) => ({
      countClick: previusState.countClick + 1 
    }))
  }

  handleClick1 = () => {
    this.setState((previusState, _props) => ({
      countClick1: previusState.countClick1 + 1 
    }))
  }

  handleClick2 = () => {
    this.setState((previusState, _props) => ({
      countClick2: previusState.countClick2 + 1 
    }))
  }
    render() {
      return (
        <>
        <button onClick={this.handleClick}>{this.state.countClick}</button>
        <button onClick={this.handleClick1}>{this.state.countClick1}</button>
        <button onClick={this.handleClick2}>{this.state.countClick2}</button>
        </>
      );
    }
}

export default App;
