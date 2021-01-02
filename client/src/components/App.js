import React, { useState } from 'react';
import { useSocket } from 'use-socketio';
import { useQuery, useMutation, gql } from '@apollo/client';

const App = () => {
  const [ name, setName ] = useState('');
  const [ history, setHistory ] = useState([]);

  const {
    loading: queryLoading,
    error: queryError,
    data: queryData,
  } = useQuery(gql`
    query GetHelloWorld {
      helloWorld {
        hello
      }
    }
  `);

  const [
    sayHello,
    {
      loading: mutationLoading,
      called: mutationCalled,
      error: mutationError,
      data: mutationData,
    },
  ] = useMutation(gql`
    mutation SayHello($name: String!) {
      sayHello(name: $name)
    }
  `);

  useSocket('data', (data) => setHistory([...history, data]));

  if (queryLoading) return 'Loading...';

  if (queryError) return JSON.stringify(queryError);
  if (mutationError) return JSON.stringify(mutationError);

  const {
    helloWorld: {
      hello,
    },
  } = queryData;

  const apiMessage = (!mutationLoading && mutationCalled) ? (
    <span>API Response Recieved: {mutationData.sayHello}</span>
  ) : null;

  return (
    <div>
      <h1>{hello}</h1>
      <input
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <button onClick={() => sayHello({ variables: { name } })}>Send</button>
      {apiMessage}
      <ul>{history.map((data, i) =><li key={i}>{data}</li>)}</ul>
    </div>
  );
}

export default App;
