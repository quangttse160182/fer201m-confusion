import { Component } from 'react';
import { Store } from './Store';

export class Stock extends Component {
  constructor() {
    super();
    this.state = {
      itemName: 'rose',
      number: 1000,
    };
  }

  changeNumber = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    return (
      <div>
        <Store
          itemName={this.state.itemName}
          number={this.state.number}
          onChangeNumber={this.changeNumber}
        />
        <Store
          itemName={this.state.itemName}
          number={this.state.number}
          onChangeNumber={this.changeNumber}
        />
      </div>
    );
  }
}
