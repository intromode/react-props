import React from 'react';
import PropTypes from 'prop-types';



export default function Color({ name, hex, rgb }) {
  const divStyle = {
    backgroundColor: hex
  };

  return (
    <dl style={divStyle}>
      <dt>Name</dt>
      <dd>{name ? name : hex}</dd>

      <dt>Hex</dt>
      <dd>{hex}</dd>

      <dt>rgb</dt>
      <dd>{rgb}</dd>
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string,
  hex: PropTypes.string.isRequired,
  rgb: PropTypes.string.isRequired,
};
