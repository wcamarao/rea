// Please note that I may have made an assumption here.
// The diagram from the spec seemed like adding a property
// would *copy* it from All Properties to Saved Properties, and
// removing a property would *move* it the other way around.
// Since I don't have access to the product team at the moment,
// I'm assuming both operations will *move* the property,
// which seems more reasonable to me.

import propertiesData from './properties-data';

const properties = (state = propertiesData, action) => {
  switch (action.type) {

  case 'ADD_PROPERTY':
    return {
      all: state.all.filter(property => property.id !== action.id),
      saved: state.saved.concat(state.all.filter(property => property.id === action.id))
    };

  case 'REMOVE_PROPERTY':
    return {
      all: state.all.concat(state.saved.filter(property => property.id === action.id)),
      saved: state.saved.filter(property => property.id !== action.id)
    };

  default:
    return state;
  }
};

export default properties;
