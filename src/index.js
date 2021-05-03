// Environment dependencies
import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

import "../node_modules/materialize-css/dist/css/materialize.min.css";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
