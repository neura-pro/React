import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from '../Actions.jsx';

const View = ({ handler }) => {
  let input;
  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    handler(input.value);
    input.value = '';
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={(node) => {input = node}}/>
        <button type="submit">
          Add Item!!?
        </button>
      </form>
    </div>
  );
}

View.propTypes = {
  handler: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    handler: (text) => {
      dispatch(Actions.addItem(text));
    }
  }
}

const AddItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(View);

export default AddItem;