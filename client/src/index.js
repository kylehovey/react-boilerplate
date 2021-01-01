import React from 'react';
import ReactDOM from 'react-dom';
import { SocketIOProvider } from 'use-socketio';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import './style/index.css';

import App from './components/App';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <SocketIOProvider url="http://localhost:3000">
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </SocketIOProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
