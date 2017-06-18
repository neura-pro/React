import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item.jsx';

const ItemList = ({ items, clickHandler }) => (
  <ul>
    {items.map(item => (
      <Item key={item.id} {...item} onClick={() => clickHandler(item.id)} />
    ))}
  </ul>
);

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  clickHandler: PropTypes.func.isRequired
}

export default ItemList;