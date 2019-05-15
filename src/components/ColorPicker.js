import React from 'react';
import PropTypes from 'prop-types';


export default function ColorPicker({ selectColorHandler }) {
  const colors = ['red', 'yellow', 'blue'];
  
  return (
    colors.map(color => {
      return <button style={{ background: color }} key={color} onClick={ () => selectColorHandler(color)}>{color}</button>;
    })
  );

}
ColorPicker.propTypes = {
  selectColorHandler: PropTypes.func.isRequired
};
