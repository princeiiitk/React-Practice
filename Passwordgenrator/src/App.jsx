import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(10);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [password, setPassword] = useState("");
  const passCopyRef = useRef(null);

  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) {
      str += "123456789";
    }
    if (includeSpecialChars) {
      str += "!@#$%^&*()_|}{:,./";
    }

    let pass = "";
    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [includeNumbers, includeSpecialChars, length]);

  useEffect(() => {
    generatePassword();
  }, [includeNumbers, includeSpecialChars, length, generatePassword]);

  const copyPassword = () => {
    passCopyRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Password Generator</h1>
        <input
          type="text"
          value={password}
          ref={passCopyRef}
          className="w-full h-12 px-4 mb-4 border rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          readOnly
        />
        <button
          onClick={copyPassword}
          className="w-full h-12 mb-4 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Copy
        </button>
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-lg">Length</label>
            <input
              type="range"
              max={80}
              min={10}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-32"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={includeSpecialChars}
              onChange={() => setIncludeSpecialChars((prev) => !prev)}
              className="mr-2"
            />
            <label className="text-lg">Include Special Characters</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers((prev) => !prev)}
              className="mr-2"
            />
            <label className="text-lg">Include Numbers</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
