import { Component } from "react";
import { PresentationalComponent } from "./PresentationalComponent";

export class ContainerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "my blog",
      content: "I love orchids...",
    };
  }
  render() {
    return (
      <div>
        <PresentationalComponent
          title={this.state.title}
          content={this.state.content}
        />
      </div>
    );
  }
}
