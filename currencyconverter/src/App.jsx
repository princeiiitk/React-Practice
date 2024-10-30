import { useState } from "react";
import Inputbox from "./componenet/inputebox";
import CurrencyInfo from "./Hooks/currencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [toCurrency, setToCurrency] = useState("INR");
  const [fromCurrency, setFromCurrency] = useState("USD");

  const response = CurrencyInfo(fromCurrency);
  console.log(response);
  const options = response ? Object.keys(response) : [];

  const swap = () => {
    setToCurrency(fromCurrency);
    setFromCurrency(toCurrency);
    setConvertedAmount(amount / response[toCurrency]);
  };

  const convert = () => {
    console.log(response[toCurrency]);
    setConvertedAmount(amount * response[toCurrency]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Currency Converter</h1>

      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <Inputbox
          label="From"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setFromCurrency(currency)}
          onAmountChange={(amount) => setAmount(amount)}
          selectedCurrency={fromCurrency}
        />

        <div className="flex justify-center my-4">
          <button
            onClick={swap}
            className="border-2 border-black w-24 h-12 bg-blue-600 rounded-lg text-xl font-semibold text-white hover:bg-blue-500 transition duration-200"
          >
            Swap
          </button>
        </div>

        <Inputbox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setToCurrency(currency)}
          onAmountChange={(amount) => setAmount(amount)}
          selectedCurrency={toCurrency}
        />

        <div className="flex justify-center my-4">
          <button
            onClick={convert}
            className="border-2 border-black w-full max-w-md h-14 text-2xl bg-slate-300 rounded-lg font-semibold hover:bg-slate-400 transition duration-200"
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
