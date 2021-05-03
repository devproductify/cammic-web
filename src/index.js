// Environment dependencies
import './index.css';
import Main from './Main.js';
import React from 'react';
import ReactDOM from 'react-dom';

import "../node_modules/materialize-css/dist/css/materialize.min.css";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
