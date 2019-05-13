import React from 'react';
import PropTypes from 'prop-types';

export default function Dog({ age, name, weight }) {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{name}</dd>

      <dt>Age</dt>
      <dd>{age}</dd>

      <dt>Weight</dt>
      <dd>{weight}</dd>
    </dl>
  );
}

Dog.propTypes = {
  age: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
};
