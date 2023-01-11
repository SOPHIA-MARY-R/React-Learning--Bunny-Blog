import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//get the root element and render all the components and mount them to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
