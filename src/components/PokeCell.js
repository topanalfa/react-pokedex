import React from 'react';
import './styles/PokeCell.css';

class PokeCell extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('Click happened');
  }
  render() {
    return <button onClick={this.handleClick} className="poke-cell">
        <img src={this.props.imageUrl} />
        {this.props.name}
      </button>
  }
};
export default PokeCell;