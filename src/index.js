import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Global } from 'styles/Global';
import { Toastify } from 'components/Toastify/Toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="goit-react-hw-05-movies">
    <App />
    <Global />
    <Toastify />
  </BrowserRouter>
);
