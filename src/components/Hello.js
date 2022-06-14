import { Component } from 'react';

class Hello extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>{this.props.msg}</h1>
        <h1>{this.props.user.id}, {this.props.user.name}</h1>
      </>
    );
  }
}

export default Hello;
