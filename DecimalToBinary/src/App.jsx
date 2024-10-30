import { useState } from 'react';
import './App.css';

function App() {
  const [decimal, setDecimal] = useState("");
  const [binary, setBinary] = useState("");

  const binaryToDecimal = () => {
    let temp = Number(decimal);
    let str = "";
    while (temp > 0) {
      str = Math.floor(temp % 2) + str;
      temp = Math.floor(temp / 2);
    }
    setBinary(str);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-5">
        <div className="flex flex-col items-center justify-center shadow-lg bg-white rounded-lg p-6 w-full max-w-md border border-gray-300">
          <h1 className="text-2xl font-bold mb-4">Decimal to Binary Converter</h1>
          <div className="flex flex-col w-full mb-4">
            <label className="text-lg font-semibold" htmlFor="decimal">Decimal Number</label>
            <input
              className="text-lg bg-gray-200 h-10 rounded-lg border border-gray-400 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setDecimal(e.target.value)}
              placeholder="Enter Decimal Number"
              type="number"
              id="decimal"
            />
          </div>
          <button
            className="text-center font-serif text-lg bg-blue-500 text-white rounded-lg h-10 w-full hover:bg-blue-600 transition duration-200"
            onClick={binaryToDecimal}
          >
            Convert
          </button>
          <div className="flex flex-col w-full mt-4">
            <label className="text-lg font-semibold" htmlFor="binary">Binary Number</label>
            <input
              className="text-lg h-10 bg-gray-200 border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={binary}
              placeholder="Binary number here"
              type="text"
              id="binary"
              readOnly
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
