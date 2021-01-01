import React from 'react';
import ReactDOM from 'react-dom';
import { SocketIOProvider } from 'use-socketio';

import './style/index.css';

import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <SocketIOProvider url="http://localhost:3000">
      <App />
    </SocketIOProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
