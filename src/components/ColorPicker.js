import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export default class ColorButtons extends PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired
  }

  redHandler = () => {
    console.log('red');
  }

  yellowHandler = () => {
    console.log('yellow');
  }

  blueHandler = () => {
    console.log('blue');
  }

  render() {
    return (
      <>
      <button onClick={this.redHandler}>Red</button>,
      <button onClick={this.yellowHandler}>Yellow</button>,
      <button onClick={this.blueHandler}>Blue</button>
      </>
    );
  }
}

//create a button for red, yellow, blue 
//when the button is pressed console.log(the color)
