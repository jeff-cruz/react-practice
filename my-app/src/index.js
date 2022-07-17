import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

// if the data isn't available yet but is loading
// if we get the data
// if there's an error

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TreesContext.Provider value = {{ trees }}>
    <App />
  </TreesContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
