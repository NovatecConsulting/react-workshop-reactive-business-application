import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'material-icons/iconfont/material-icons.css';
import {worker} from './mocks/browser';

// start msw service worker
worker.start().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  )
});
