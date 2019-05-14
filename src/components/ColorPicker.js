import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export default class ColorButtons extends PureComponent {
  static propTypes = {
    colors: PropTypes.array.isRequired
  }

  eventHandler = event => {
    console.log(event.target.textContent);
  }

  render() {
    const colorButtons = this.props.colors.map(color => {
      return <button key={color} onClick={this.eventHandler}>{color}</button>;
    });
    return (
      <>
        {colorButtons}
      </>
    );
  }
}

//create a button for red, yellow, blue 
//when the button is pressed console.log(the color)
