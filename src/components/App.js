import React, { Component } from 'react';
import PokemonList from './PokemonList';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    fetch("https://api.pokemontcg.io/v1/cards")
      .then(response => response.json())
      .then(
        (response) => {
          this.setState({
            isLoaded: true,
            items: response['cards']
          });
        },
        // Note: it's important to handle errors here
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    return (
      <div className="App">
        <PokemonList/>
        <div style={{marginBottom: 10, position: 'relative'}}>Pokedex by <a
          className="App-link"
          href="https://topanalfa.com"
          target="_blank"
          rel="noopener noreferrer"
        >Topanalfa.com</a></div>
      </div>
    )
    }
}

export default App;
