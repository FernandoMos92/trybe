import { Component } from 'react';
import '../App.css';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return ( 
      <main>{conteudos.map((el, index) => {
        const result =
        <div className="container-main" key={index}>
          <h4>{`O conteúdo é: ${el.conteudo}`}</h4>
          <p>{`Status: ${el.status}`}</p>
          <p>{`Bloco: ${el.bloco}`}</p>
        </div>
        return result})
      }</main>
      
       )
  }
}

export default Content;