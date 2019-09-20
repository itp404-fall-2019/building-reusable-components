import React from "react";
import PropTypes from 'prop-types';

export default function RemainingCharacters(props) {
  const { max, text, children } = props;
  const remaining = max - text.length;
  return <>{children ? children(remaining) : remaining}</>;
}

RemainingCharacters.propTypes = {
  text: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired
};