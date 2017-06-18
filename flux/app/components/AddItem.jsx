import React from 'react';
import PropTypes from 'prop-types';

const AddItem = ({ submitHandler }) => {
  let input;
  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    submitHandler(input.value);
    input.value = '';
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={(node) => {input = node}}/>
        <button type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
}

AddItem.propTypes = {
  submitHandler: PropTypes.func.isRequired
}

export default AddItem;