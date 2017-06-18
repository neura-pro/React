import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Actions from '../Actions.jsx';
import Link from '../components/Link.jsx';

const mapStateToProps = (state, props) => {
  return {
    active: props.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    clickHandler: () => {
      dispatch(Actions.setVisibilityFilter(props.filter))
    }
  }
}

const LinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

LinkContainer.propTypes = {
  filter: PropTypes.string.isRequired
}

export default LinkContainer;