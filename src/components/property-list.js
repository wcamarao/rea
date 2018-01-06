import React from 'react';
import PropertyListItem from './property-list-item';
import PropTypes from 'prop-types';
import { propertyShape } from '../shapes/property-shape';

const PropertyList = ({ all, saved, onAddClick, onRemoveClick }) => (
  <div className="property-list container">
    <div className="row">

      <div className="col-xs-6">
        <h2>All Properties</h2>
        {all.map(property =>
          <PropertyListItem
            key={property.id}
            property={property}
            buttonClick={() => onAddClick(property.id)}
            buttonLabel="Add"
            buttonColor="success" />
        )}
      </div>

      <div className="col-xs-6">
        <h2>Saved Properties</h2>
        {saved.map(property =>
          <PropertyListItem
            key={property.id}
            property={property}
            buttonClick={() => onRemoveClick(property.id)}
            buttonLabel="Remove"
            buttonColor="danger" />
        )}
      </div>

    </div>
  </div>
);

PropertyList.propTypes = {
  all: PropTypes.arrayOf(propertyShape).isRequired,
  saved: PropTypes.arrayOf(propertyShape).isRequired,
  onAddClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired
};

export default PropertyList;
