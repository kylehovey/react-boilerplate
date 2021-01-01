import React, { useState } from 'react';
import { useSocket } from 'use-socketio';
import { useQuery, gql } from '@apollo/client';

const GET_HELLO_WORLD = gql`
  query getHelloWorld {
    helloWorld {
      hello
    }
  }
`;

const App = () => {
  const [ history, setHistory ] = useState([]);
  const { loading, error, data } = useQuery(GET_HELLO_WORLD);

  useSocket('data', (data) => setHistory([...history, data]));

  if (loading) return "Loading...";
  if (error) return JSON.stringify(error);

  const { helloWorld: { hello } } = data;

  return (
    <div>
      <h1>{hello}</h1>
      <ul>{history.map((data, i) =><li key={i}>{data}</li>)}</ul>
    </div>
  );
}

export default App;
