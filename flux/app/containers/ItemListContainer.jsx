import { connect } from 'react-redux';
import Actions from '../Actions.jsx';
import Enum from '../Enum.jsx';
import ItemList from '../components/ItemList.jsx';

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
    clickHandler: (id) => {
      dispatch(Actions.toggleItem(id))
    }
  }
}

const ItemListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);

export default ItemListContainer;