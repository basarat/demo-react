import React, { useState } from 'react';
import { flushSync } from 'react-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    flushSync(() => {
      setCount(count => count + 1);
    });
    flushSync(() => {
      setToggle(toggle => !toggle);
    });
  };

  console.log('Rendered', count, toggle);

  return (
    <div className="App">
      <button onClick={handleClick}>Click Me</button>
      <div>Count: {count}</div>
      <div>Toggle: {toggle.toString()}</div>
    </div>
  );
}

export default App;
