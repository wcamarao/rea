import _ from 'lodash';
import React, { Component } from 'react';
import PropertyListItem from './property-list-item';
import PropTypes from 'prop-types';

class PropertyList extends Component {
  render() {
    return (
      <div className="property-list col-xs-6">
        <h2>{this.props.title}</h2>

        {_.map(this.props.properties, (property) => {
          return <PropertyListItem
            key={property.id}
            property={property}
            buttonClick={this.props.buttonClick}
            buttonLabel={this.props.buttonLabel} />;
        })}
      </div>
    );
  }
}

PropertyList.propTypes = {
  title: PropTypes.string.isRequired,
  properties: PropTypes.array.isRequired,
  buttonClick: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired
};

export default PropertyList;
