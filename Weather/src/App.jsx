import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [pressure, setPressure] = useState("");

  const handleSearch = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7d071fbe0ce859f38fc52421fe538ec8&units=metric`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setTemp(data.main.temp);
        setHumidity(data.main.humidity);
        setWind(data.wind.speed);
        setPressure(data.main.pressure);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchData();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="w-full max-w-md p-6 m-4 bg-white rounded-xl shadow-lg md:w-1/2 lg:w-1/3">
        <div className="flex flex-col items-center">
          <label className="text-2xl font-bold text-gray-700 mb-4">Enter City Name</label>
          <input
            onChange={(e) => setCity(e.target.value)}
            type="text"
            placeholder="Enter your City Name"
            className="w-full p-2 mb-6 text-lg text-gray-800 placeholder-gray-500 bg-gray-200 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="w-40 px-4 py-2 text-white bg-green-500 rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
          >
            Search
          </button>
        </div>

        {temp && (
          <div className="mt-8 text-center">
            <div className="flex justify-between text-lg text-gray-800 mb-4">
              <span className="font-medium">Temperature:</span>
              <span>{temp} °C</span>
            </div>
            <div className="flex justify-between text-lg text-gray-800 mb-4">
              <span className="font-medium">Humidity:</span>
              <span>{humidity}%</span>
            </div>
            <div className="flex justify-between text-lg text-gray-800 mb-4">
              <span className="font-medium">Wind Speed:</span>
              <span>{wind} km/h</span>
            </div>
            <div className="flex justify-between text-lg text-gray-800">
              <span className="font-medium">Pressure:</span>
              <span>{pressure} hPa</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
