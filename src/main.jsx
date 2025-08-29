import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import React from 'react';
import {Provider} from 'react-redux';
import { store } from './redux/store.js';
import UserContext from './context/UserContext.jsx';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <UserContext>
     <App />
  </UserContext>
  </Provider>
)
