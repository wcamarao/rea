import { connect } from 'react-redux';
import { addProperty, removeProperty } from '../actions';
import PropertyList from '../components/property-list';

const mapStateToProps = (state) => ({
  all: state.properties.all,
  saved: state.properties.saved
});

const mapDispatchToProps = {
  onAddClick: addProperty,
  onRemoveClick: removeProperty
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyList);
