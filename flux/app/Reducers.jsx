import { combineReducers } from 'redux';
import Actions from './Actions.jsx';
import Enum from './Enum.jsx';

const items = (state = [], action) => {
  switch (action.type) {
    case Actions.ADD_ITEM:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case Actions.TOGGLE_ITEM:
      return state.map(item =>
        (item.id === action.id) 
          ? {...item, completed: !item.completed}
          : item
      )
    default:
      return state
  }
}

const visibilityFilter = (state = Enum.FILTER_SHOW_ALL, action) => {
  switch (action.type) {
    case Actions.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const Reducers = combineReducers({
  items,
  visibilityFilter
});

export default Reducers;