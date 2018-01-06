import React from 'react';
import ReactDOM from 'react-dom';
import PropertyContainer from './containers/property-container';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <PropertyContainer />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
