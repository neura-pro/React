import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from '../Actions.jsx';
import Enum from '../Enum.jsx';
import Item from '../components/Item.jsx';

const View = ({ items, handler }) => (
  <ul>
    {items.map(item => (
      <Item key={item.id} {...item} onClick={() => handler(item.id)} />
    ))}
  </ul>
);

View.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  handler: PropTypes.func.isRequired
}

const getVisibleItems = (items, filter) => {
  switch (filter) {
    case Enum.FILTER_SHOW_ALL:
      return items;
    case Enum.FILTER_SHOW_COMPLETED:
      return items.filter(item => item.completed);
    case Enum.FILTER_SHOW_ACTIVE:
      return items.filter(item => !item.completed);
  }
}

const mapStateToProps = (state) => {
  return {
    items: getVisibleItems(state.items, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handler: (id) => {
      dispatch(Actions.toggleItem(id))
    }
  }
}

const ItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(View);

export default ItemList;