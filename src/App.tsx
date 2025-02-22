import { useState } from "react";
import useProfitCalculator from "./useProfitCalculator.ts";
import "./App.css";
import formatInputToNumber from "./utils.ts";

function App() {
  const [buyRate, setBuyRate] = useState("0");
  const [sellRate, setSellRate] = useState("0");
  const [coin, setCoin] = useState("0");
  const [fee, setFee] = useState("0.08");

  const { orderFee, profit } = useProfitCalculator({
    buyPrice: formatInputToNumber(buyRate),
    sellPrice: formatInputToNumber(sellRate),
    investment: formatInputToNumber(sellRate) * formatInputToNumber(coin),
    fee: formatInputToNumber(fee),
  });

  return (
    <div className="flex flex-grow bg-gray-900 flex justify-center h-screen text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold text-center mb-4">
          Trade Profit Calculator
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-300 font-medium">Buy Rate</label>
            <input
              value={buyRate}
              onChange={(e) => setBuyRate(e.target.value)}
              type="text"
              className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter buy rate"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium">Sell Rate</label>
            <input
              value={sellRate}
              onChange={(e) => setSellRate(e.target.value)}
              type="text"
              className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter sell rate"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium">
              Coin to sell
            </label>
            <input
              value={coin}
              onChange={(e) => setCoin(e.target.value)}
              type="text"
              className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter coin"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium">
              Fee percent
            </label>
            <input
              value={fee}
              onChange={(e) => setFee(e.target.value)}
              type="text"
              className="w-full p-2 border border-gray-600 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter buy comission %"
            />
          </div>

          <div
            id="result"
            className="mt-6 text-center text-xl font-bold text-green-400"
          >
            <p>Profit: {isNaN(profit) === false ? profit : 0}</p>
          </div>
          <div className="text-center text-xl font-bold text-red-400">
            <p>
              Fee:{" "}
              {typeof orderFee === "number" && isNaN(orderFee) === false
                ? orderFee
                : 0}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
