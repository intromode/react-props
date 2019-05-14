import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './ColorPicker.css';


export default class ColorButtons extends PureComponent {
  state = {
    background: ''
  }



  static propTypes = {
    colors: PropTypes.array.isRequired
  }

  eventHandler = event => {
    this.setState({ background: event.target.textContent });
  }

  render() {
    console.log('background', this.state);

    const colorButtons = this.props.colors.map(color => {
      return <button key={color} onClick={this.eventHandler}>{color}</button>;
    });
    return (
      <section className={styles.ColorButtons}>
        <div style={this.state}></div>
        {colorButtons}
      </section>
    );
  }
}


//styles={this.state.background}
