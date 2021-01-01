import React, { useState } from 'react';
import { useSocket } from 'use-socketio';
import { useQuery, useMutation, gql } from '@apollo/client';

const GET_HELLO_WORLD = gql`
  query GetHelloWorld {
    helloWorld {
      hello
    }
  }
`;

const SAY_HELLO = gql`
  mutation SayHello($name: String!) {
    sayHello(name: $name)
  }
`;

const App = () => {
  const [ name, setName ] = useState('');
  const [ history, setHistory ] = useState([]);

  const message = (
    ({ loading, data, error }) => loading || error
      ? null
      : <h1>{data.helloWorld.hello}</h1>
  )(useQuery(GET_HELLO_WORLD));

  const [ sayHello, mutationResponse ] = (
    ([ sayHello, { loading, called, data, error } ]) => [
      sayHello,
      !called || loading || error
        ? null
        : <span>API Response Recieved: {data.sayHello}</span>,
    ]
  )(useMutation(SAY_HELLO));

  useSocket('data', (data) => setHistory([...history, data]));

  return (
    <div>
      {message}
      <input
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <button onClick={() => sayHello({ variables: { name } })}>Send</button>
      {mutationResponse}
      <ul>{history.map((data, i) =><li key={i}>{data}</li>)}</ul>
    </div>
  );
}

export default App;
