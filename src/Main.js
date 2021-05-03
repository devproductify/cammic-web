// Environment dependencies
import React from 'react';
import App from './App.js';
import Logo from './webcam.png';

/**
 * Page layout setup
 * @param {object}:any props 
 * @returns JSX.Element
 */
export default function Main(props) {

  return (
    <div className='row'>

      <div className="col s12 l6 content">

        <img src={Logo} alt="Logo" style={{ width: '240px' }}></img>

        <div className='description'>
          <h4>CAMMIC</h4>
          <p> Utility for webcam and microphone testing written for web </p>
        </div>

      </div>

      <div className="col s12 l6">
        <App />
      </div>

    </div>
  );
};