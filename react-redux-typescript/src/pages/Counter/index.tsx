import './index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Counter = (): JSX.Element => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <h1>Counter</h1>
      <Link id="home-link" to="/">Home</Link>

      <h3>Counter:</h3>
      <p id="counter-value">{counter}</p>

      <button id="increment-btn" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>

      <button id="decrement-btn" onClick={() => setCounter(counter - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
