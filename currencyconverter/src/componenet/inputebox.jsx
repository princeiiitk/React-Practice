/* eslint-disable react/prop-types */
export default function Inputbox({
  label,
  amount = 0,
  currencyOptions = [],
  selectedCurrency,
  onAmountChange,
  onCurrencyChange,
}) {
    console.log(onAmountChange);
  return (
    <>
      <div className="flex items-center justify-center text-xl font-sans w-[60%] ml-[20%] bg-blue-400 rounded-xl shadow-xl">
        <div className="flex flex-col items-center justify-center w-[40%] pb-10">
          <label htmlFor="" className="text-3xl mr-[60%] m-2">{label}</label>
          <input
            value={amount}
            onChange={(e) =>onAmountChange(e.target.value)}
            className="w-[80%] border-2 border-black h-12 rounded-xl font-sans text-3xl"
            type="number"
          />
        </div>

        <div className="flex flex-col h-[20%] w-[20%] p-2">
          <label className="mb-10 text-3xl font-sans" htmlFor="">Currency type</label>
          <select
            value={selectedCurrency}
            onChange={(e) =>onCurrencyChange(e.target.value)}
            className="border-2 border-black w-40 h-10 rounded-lg mb-2"
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}