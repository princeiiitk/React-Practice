/* eslint-disable react/prop-types */
export default function Inputbox({
  label,
  amount = 0,
  currencyOptions = [],
  selectedCurrency,
  onAmountChange,
  onCurrencyChange,
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 bg-blue-400 rounded-xl shadow-lg md:flex-row md:justify-around">
      <div className="flex flex-col items-center w-full md:w-1/2 mb-4 md:mb-0">
        <label htmlFor="" className="text-3xl mb-2">{label}</label>
        <input
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          className="w-full h-12 px-4 border-2 border-black rounded-lg text-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
        />
      </div>

      <div className="flex flex-col items-center w-full md:w-1/4">
        <label className="mb-2 text-3xl">Currency type</label>
        <select
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="w-full h-12 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
