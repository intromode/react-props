import React, { PureComponent } from 'react';

export default class Incrementer extends PureComponent {
  state = {
    buttonClicked: 0
  }

  eventHandler = () => {
    this.setState(state => {
      return {
        buttonClicked: state.buttonClicked + 1
      };
    });
  }

  render() {
    console.log(this.state.buttonClicked);

    return <>
      <h2>{this.state.buttonClicked}</h2>
      <button onClick={this.eventHandler}>Increment</button>
    </>;
  }
}

