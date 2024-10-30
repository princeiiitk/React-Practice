import { useState } from "react";

function App() {
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    if (value === "AC") {
      setExpression("");
    } else if (value === "DEL") {
      setExpression(expression.slice(0, -1));
    } else if (value === "=") {
      try {
        const result = eval(expression);
        setExpression(result.toString());
      } catch (error) {
        console.log(error);
        setExpression("Error");
      }
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="w-full max-w-sm">
        <input
          type="text"
          value={expression}
          placeholder="Enter Your Expression"
          className="bg-white border-2 border-gray-400 h-14 mb-4 px-4 shadow-lg rounded-xl text-3xl font-serif w-full"
          readOnly
        />
        <div className="rounded-lg flex flex-col p-2 shadow-lg border-2 border-gray-400 bg-white">
          {[
            ["1", "2", "3", "+"],
            ["4", "5", "6", "-"],
            ["7", "8", "9", "*"],
            ["AC", "DEL", "/", "="],
          ].map((row, index) => (
            <div key={index} className="flex justify-between mb-2">
              {row.map((item) => (
                <button
                  key={item}
                  className={`flex-1 m-1 h-14 rounded-full font-serif text-2xl text-white 
                  ${item === "AC" || item === "DEL"
                      ? "bg-red-500 hover:bg-red-400"
                      : item === "="
                        ? "bg-green-500 hover:bg-green-400"
                        : item === "+"
                          ? "bg-blue-500 hover:bg-blue-400"
                          : item === "-"
                            ? "bg-yellow-500 hover:bg-yellow-400"
                            : item === "*"
                              ? "bg-purple-500 hover:bg-purple-400"
                              : item === "/"
                                ? "bg-orange-500 hover:bg-orange-400"
                                : "bg-gray-700 hover:bg-gray-600"
                    } transition duration-200`}
                  onClick={() => handleClick(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
