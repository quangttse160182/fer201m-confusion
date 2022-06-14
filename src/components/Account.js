import { Component } from 'react';

export class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Van',
      balance: 1000,
    };
  }

  withdraw = () =>
    this.setState((state) => ({
      name: state.name,
      balance: state.balance - 100,
    }));

  render() {
    return (
      <div>
        <h2>name: {this.state.name}</h2>
        <h2>balance: {this.state.balance}</h2>
        <button onClick={this.withdraw}>Click Me</button>
      </div>
    );
  }
}
