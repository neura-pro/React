import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from '../Actions.jsx';

const View = ({ active, children, handler }) => {
  if (active) {
    return (
      <span>
        {children}
      </span>
    );
  }
  const onClick = (e) => {
    e.preventDefault();
    handler();
  }
  return (
    <a href="#" onClick={onClick}>
      {children}
    </a>
  );
}

View.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  handler: PropTypes.func.isRequired
}

const mapStateToProps = (state, props) => {
  return {
    active: props.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    handler: () => {
      dispatch(Actions.setVisibilityFilter(props.filter))
    }
  }
}

const Link = connect(
  mapStateToProps,
  mapDispatchToProps
)(View);

Link.propTypes = {
  filter: PropTypes.string.isRequired
}

export default Link;