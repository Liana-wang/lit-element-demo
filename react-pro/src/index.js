import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js';
import 'regenerator-runtime/runtime';
import '@webcomponents/webcomponentsjs/webcomponents-bundle.js'
import '@ai/lit-ui'
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
