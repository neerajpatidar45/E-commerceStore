import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from "react";
import "./index.css"
import Shoppingcard from './Shoppingcard';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Shoppingcard/>
      <ToastContainer/>
    </Provider>
  </BrowserRouter>
);
 
