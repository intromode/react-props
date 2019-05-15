import React, { PureComponent } from 'react';
import ColorPicker from './ColorPicker';
import ColorDisplay from './ColorDisplay';

//why do classes have to have a render whereas functions just return?

export default class App extends PureComponent {
  state = {
    currentColor: ''
  }

  selectColor = currentColor => {
    this.setState({ currentColor });
  }
  render() {

    return (
      <>
      <ColorPicker selectColorHandler={this.selectColor} />
      <ColorDisplay currentColor={this.state.currentColor} />
      </>
    );
  }
}
