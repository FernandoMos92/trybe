import React, { Component } from 'react';
import data from '../data/data';
import './style.css';

class Pokemon extends Component {
    render() {
     return ( 
     <>
        {data.map((el) => ( 
        <div key={el.name} className="card-pokemon">
            <h2>{el.name}</h2>
            <hr />
            <p><strong>Tipo:</strong> {el.type}</p>
            <p><strong>Peso:</strong> {el.averageWeight.value}{el.averageWeight.measurementUnit}</p>
            <img src={el.image} alt={el.name}/>
        </div>
            
            ))}
     </>
     )
    }
}
export default Pokemon;