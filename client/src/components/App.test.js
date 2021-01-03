import { MockedProvider } from '@apollo/client/testing';
import {
  render,
  screen,
  waitForElementToBeRemoved
} from '@testing-library/react';

import App, {
  GET_INDEX,
  MAKE_THING,
  DELETE_THING,
  RANDOM_NUMBER
} from './App';

const things = ['fish','cat','dog'].map((name, id) => ({ id, name }));

const mocks = [{
  request: {
    query: GET_INDEX,
  },
  result: {
    data: {
      helloWorld: {
        hello: "Hello World",
      },
      things,
    },
  },
},{
  request: {
    query: RANDOM_NUMBER,
  },
  result: {
    data: {
      randomNumber: Math.random(),
    },
  },
}];

test('renders hello world', async () => {
  const [ { result } ] = mocks;

  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );

  expect(screen.queryByText(/loading/i)).toBeInTheDocument();

  await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));

  expect(screen.getByText(result.data.helloWorld.hello)).toBeInTheDocument(1);
});
