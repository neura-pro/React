import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, clickHandler }) => {
  if (active) {
    return (
      <span>
        {children}
      </span>
    );
  }
  const onClick = (e) => {
    e.preventDefault();
    clickHandler();
  }
  return (
    <a href="#" onClick={onClick}>
      {children}
    </a>
  );
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  clickHandler: PropTypes.func.isRequired
}

export default Link;