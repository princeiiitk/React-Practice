import { useState } from 'react';
import './App.css'

function App() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <div className="container">
      <div className="counter">
        <h1>Counter App</h1>
        <p className="value">{value}</p>
        <div className="buttons">
          <button className="btn increment" onClick={increment}>
            Increment
          </button>
          <button className="btn decrement" onClick={decrement}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
