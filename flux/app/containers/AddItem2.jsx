import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from '../Actions.jsx';

const View = ({ dispatch }) => {
  let input;
  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    dispatch(Actions.addItem(input.value));
    input.value = '';
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={(node) => {input = node}}/>
        <button type="submit">
          Add Item22
        </button>
      </form>
    </div>
  )
}

View.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const AddItem2 = connect()(View);

export default AddItem2;