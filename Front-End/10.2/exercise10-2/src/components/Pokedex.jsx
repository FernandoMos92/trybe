import React, { Component } from 'react';
import Pokemon from './Pokemon'
import './style.css';


class Pokedex extends Component {
    render() {
        return (
            <div className="pokedex-frame">
                <div className="display-pokedex">
                    <Pokemon/>
                </div>
            </div>
        )
    }
}

export default Pokedex;