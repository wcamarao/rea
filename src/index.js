import React from 'react';
import ReactDOM from 'react-dom';
import PropertyContainer from './containers/property-container';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(<PropertyContainer />, document.getElementById('root'));
registerServiceWorker();
