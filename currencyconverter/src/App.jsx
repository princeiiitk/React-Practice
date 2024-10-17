import { useState } from "react";
import Inputbox from "./componenet/inputebox";
import CurrencyInfo from "./Hooks/currencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromCurrency, setFromCurrency] = useState("INR");

  const response = CurrencyInfo(fromCurrency);
  const options = response ? Object.keys(response) : [];

  const swap = () => {
    setToCurrency(fromCurrency);
    setFromCurrency(toCurrency);
  };

  const convert = () => {
    if (response && response[toCurrency]) {
      setConvertedAmount(amount * response[toCurrency]);
    }
  };

  return (
    <>
      <div>
        <div>
          <Inputbox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFromCurrency(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            selectedCurrency={fromCurrency}
          />
        </div>

        <div>
          <button
            onClick={swap}
            className="border-2 border-black w-20 h-10 ml-[45%] bg-blue-600 rounded-xl text-3xl font-sans"
          >
            Swap
          </button>
        </div>

        <div>
          <Inputbox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setToCurrency(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            selectedCurrency={toCurrency}
          />
        </div>

        <div>
          <button
            onClick={convert}
            className="border-2 border-black w-[40%] ml-[30%] h-20 mt-10 text-4xl bg-slate-300 rounded-xl font-sans"
          >
            Convert
          </button>
        </div>
      </div>
    </>
  );
}

export default App;