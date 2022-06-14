import { Component } from 'react';

export class Warning extends Component {
  constructor() {
    super();
  }

  display = (msg) => alert(msg);

  render() {
    return (
      <button onClick={() => this.display('Hello world')}>Click Me</button>
    );
  }
}
