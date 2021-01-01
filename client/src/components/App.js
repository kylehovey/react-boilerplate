import { useState } from 'react';
import { useSocket } from 'use-socketio';

const App = () => {
  const [ history, setHistory ] = useState([]);

  const { socket, subscribe, unsubscribe } = useSocket('data', (data) => {
    setHistory([...history, data]);
  });

  return (
    <ul>{history.map((data, i) =><li key={i}>{data}</li>)}</ul>
  );
}

export default App;
