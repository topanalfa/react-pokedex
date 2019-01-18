import React from 'react';
import PokeCell from './PokeCell';
import './styles/PokemonList.css';

let cards = [];
const PokemonList = ({handleOnClick}) => {
  fetch("https://api.pokemontcg.io/v1/cards")
    .then(response => response.json())
    .then(
      (response) => {
        cards = response.cards;
      },
      // Note: it's important to handle errors here
      (error) => {
        console.log('error :', error);
      }
    )
  console.log('data :', cards);
  const cells = cards.map(items => {
    return (
      <PokeCell 
        key={items.id} 
        name={items.name} 
        imageUrl={items.imageUrl} 
        handleOnClick={handleOnClick}
      />
    );
  });
  return (
    <section className="poke-list">
      {cells}
    </section>
  )
}

export default PokemonList;