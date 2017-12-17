import React, { Component } from 'react';
import PropertyList from '../components/property-list';
import propertyContainerData from './property-container-data';

class PropertyContainer extends Component {
  constructor() {
    super();

    this.state = {
      allProperties: [],
      savedProperties: []
    };
  }

  componentDidMount() {
    this.setState(propertyContainerData);
  }

  render() {
    return (
      <div className="property-container container">
        <div className="row">

          <PropertyList title="All Properties"
            properties={this.state.allProperties}
            buttonClick={this.addProperty}
            buttonLabel="Add" />

          <PropertyList title="Saved Properties"
            properties={this.state.savedProperties}
            buttonClick={this.removeProperty}
            buttonLabel="Remove" />
        </div>
      </div>
    );
  }

  addProperty(property) {
    // eslint-disable-next-line no-console
    console.log('add', property);
  }

  removeProperty(property) {
    // eslint-disable-next-line no-console
    console.log('remove', property);
  }
}

export default PropertyContainer;
