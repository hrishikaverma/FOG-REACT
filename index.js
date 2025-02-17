import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';  // Added .js extension
import reportWebVitals from './reportWebVitals.js';  // Added .js extension

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
