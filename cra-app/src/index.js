import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PersonalInfo from './Componets/personalinfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <PersonalInfo/>
  </React.StrictMode>
);
