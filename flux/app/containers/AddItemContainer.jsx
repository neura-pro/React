import { connect } from 'react-redux';
import Actions from '../Actions.jsx';
import Enum from '../Enum.jsx';
import AddItem from '../components/AddItem.jsx';

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitHandler: (text) => {
      dispatch(Actions.addItem(text));
    }
  }
}

const AddItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddItem);

export default AddItemContainer;