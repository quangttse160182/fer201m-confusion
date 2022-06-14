import { Component } from 'react';

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      x: 0,
      y: 0,
    };
  }
  handleInput = (e) => this.setState({ text: e.target.value });
  handleMouse = (e) => this.setState({ x: e.screenX, y: e.screenY });

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.text}
          onChange={this.handleInput}
        />
        <img
          src='logo512.png'
          alt='logo512'
          onMouseMove={this.handleMouse}
        />
        <h1>
          {this.state.x}, {this.state.y}
        </h1>
      </div>
    );
  }
}
