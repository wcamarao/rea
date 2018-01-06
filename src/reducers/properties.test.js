/* global describe it */

import { expect } from 'chai';
import properties from './properties';
import propertiesData from './properties-data';

describe('properties reducer', () => {
  describe('initial state', () => {
    it('uses static properties data', () => {
      const state = properties(undefined, {});
      expect(state).to.equal(propertiesData);
    });
  });

  describe('ADD_PROPERTY action', () => {
    it('moves property from `all` to `saved` properties', () => {
      const initialState = {
        all: [{id: 1}, {id: 2}],
        saved: [{id: 3}]
      };

      const state = properties(initialState, {type: 'ADD_PROPERTY', id: 1});

      expect(state).to.eql({
        all: [{id: 2}],
        saved: [{id: 3}, {id: 1}]
      });
    });
  });

  describe('REMOVE_PROPERTY action', () => {
    it('moves property from `saved` to `all` properties', () => {
      const initialState = {
        all: [{id: 1}, {id: 2}],
        saved: [{id: 3}]
      };

      const state = properties(initialState, {type: 'REMOVE_PROPERTY', id: 3});

      expect(state).to.eql({
        all: [{id: 1}, {id: 2}, {id: 3}],
        saved: []
      });
    });
  });
});

// A few more things that could be tested as complexity grows:
// - Edge cases such as adding/removing unexisting properties
// - Action mappings within `../actions` directory
// - DOM manipulation, oftentimes not worthwhile
// - E2E
