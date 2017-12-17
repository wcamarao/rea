import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './property-list-item.css';

class PropertyListItem extends Component {
  render() {
    const btnColor = this.props.buttonLabel === 'Add' ? 'success' : 'danger';

    return (
      <div className="property-list-item">
        <div style={{background: this.props.property.agency.brandingColors.primary}}>
          <img src={this.props.property.agency.logo} alt="logo" />
        </div>

        <img className="img-responsive" src={this.props.property.mainImage} alt="main" />

        <div>
          <div className="property-list-item-price">{this.props.property.price}</div>
          <button className={`property-list-item-button btn btn-${btnColor}`}
            onClick={() => this.props.buttonClick(this.props.property)}>
            {this.props.buttonLabel}
          </button>
        </div>
      </div>
    );
  }
}

PropertyListItem.propTypes = {
  property: PropTypes.object.isRequired,
  buttonClick: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired
};

export default PropertyListItem;
