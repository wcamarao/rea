import React from 'react';
import PropTypes from 'prop-types';
import { propertyShape } from '../shapes/property-shape';
import './property-list-item.css';

const PropertyListItem = ({ property, buttonClick, buttonLabel, buttonColor }) => (
  <div className="property-list-item">
    <div style={{background: property.agency.brandingColors.primary}}>
      <img src={property.agency.logo} alt="Agency logo" />
    </div>
    <img className="img-responsive" src={property.mainImage} alt="Property main image" />
    <div>
      <div className="property-list-item-price">{property.price}</div>
      <button className={`property-list-item-button btn btn-${buttonColor}`}
        onClick={buttonClick}>
        {buttonLabel}
      </button>
    </div>
  </div>
);

PropertyListItem.propTypes = {
  property: propertyShape.isRequired,
  buttonClick: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired
};

export default PropertyListItem;
