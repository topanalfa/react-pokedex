import React from 'react';
import './styles/PokeCell.css';

class PokeCell extends React.Component {
  render() {
    return <button className="poke-cell">
        <img src={this.props.imageUrl} />
        {this.props.name}
      </button>
  }
};
export default PokeCell;