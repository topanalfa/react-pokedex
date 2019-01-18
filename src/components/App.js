import React, { Component } from 'react';
import PokemonList from './PokemonList';
import DetailView from './DetailView';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick(id) {
    console.log(id);
    console.log('di klik');
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
        <PokemonList handleOnClick={this.handleOnClick} />
        <DetailView />
      </div>
    )
  }
}

export default App;
