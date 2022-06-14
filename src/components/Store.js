import { Component } from 'react';

export class Store extends Component {
  constructor(props) {
    super(props);
  }

  getItem = () => {
    this.props.onChangeNumber();
  };

  render() {
    return (
      <div>
        <h1>Item Name: {this.props.itemName}</h1>
        <h2>Number of roses in stock: {this.props.number}</h2>
        <button onClick={this.getItem}>Add to cart</button>
      </div>
    );
  }
}
