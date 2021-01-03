import React, { useState } from 'react';
import { useQuery, useSubscription, useMutation, gql } from '@apollo/client';

export const GET_INDEX = gql`
  query GetIndex {
    helloWorld {
      hello
    }
    things {
      id
      name
    }
  }
`;

export const MAKE_THING = gql`
  mutation MakeThing($name: String!) {
    makeThing(name: $name) {
      id
      name
    }
  }
`;

export const DELETE_THING = gql`
  mutation DeleteThing($id: ID!) {
    deleteThing(id: $id) {
      id
      name
    }
  }
`;

export const RANDOM_NUMBER = gql`
  subscription RandomNumber {
    randomNumber
  }
`;

const App = () => {
  const [ name, setName ] = useState('');
  const [ history, setHistory ] = useState([]);

  const {
    loading: queryLoading,
    error: queryError,
    data: queryData,
  } = useQuery(GET_INDEX);

  const [
    makeThing,
    { error: createError },
  ] = useMutation(MAKE_THING, {
    refetchQueries: [
      { query: GET_INDEX },
    ],
  });

  const [
    deleteThing,
    { error: deleteError },
  ] = useMutation(DELETE_THING, {
    refetchQueries: [
      { query: GET_INDEX },
    ],
  });

  const { error: subscriptionError } = useSubscription(RANDOM_NUMBER, {
    onSubscriptionData: ({ subscriptionData }) => {
      const {
        data: {
          randomNumber,
        },
      } = subscriptionData;

      setHistory([...history, randomNumber]);
    },
  });

  if (queryLoading) return 'Loading...';
  if (queryError) return JSON.stringify(queryError);
  if (subscriptionError) return JSON.stringify(subscriptionError);

  if (createError || deleteError) {
    return JSON.stringify(createError || deleteError);
  }

  const {
    helloWorld: {
      hello,
    },
    things,
  } = queryData;

  return (
    <div>
      <h1>{hello}</h1>
      <div>
        <h2>Create Thing</h2>
        <input
          value={name}
          onChange={({ target }) => setName(target.value)}
          placeholder="Thing Name"
        />
        <button onClick={() => makeThing({ variables: { name } })}>Send</button>
      </div>
      <div>
        <h2>Things:</h2>
        <ul>
          {things.map(({ id, name }) => (
            <li key={id}>
              {id}: {name}
              <button
                onClick={() => deleteThing({ variables: { id } })}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <h2>Random Numbers:</h2>
      <ul>{history.map((data, i) =><li key={i}>{data}</li>)}</ul>
    </div>
  );
}

export default App;
