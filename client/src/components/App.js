import React, { useState } from 'react';
import { useSocket } from 'use-socketio';
import { useQuery, gql } from '@apollo/client';

const GET_HELLO_WORLD = gql`
  query getHelloWorld {
    hello
  }
`;

const App = () => {
  const [ history, setHistory ] = useState([]);
  const { loading, error, data } = useQuery(GET_HELLO_WORLD);
  const { socket, subscribe, unsubscribe } = useSocket('data', (data) => {
    setHistory([...history, data]);
  });

  if (loading) return "Loading...";

  const { hello } = data;

  return (
    <div>
      <h1>{hello}</h1>
      <ul>{history.slice(-10, history.length).map((data, i) =><li key={i}>{data}</li>)}</ul>
    </div>
  );
}

export default App;
