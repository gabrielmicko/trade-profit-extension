// useProfitCalculator.ts

import { useMemo } from "react";

interface ProfitCalculatorProps {
  buyPrice: number;
  sellPrice: number;
  investment: number;
  fee: number; // fee is now a percentage (e.g., 1 for 1%)
}

interface ProfitCalculatorResult {
  orderFee: number;
  profit: number;
}

const useProfitCalculator = ({
  buyPrice,
  sellPrice,
  investment,
  fee,
}: ProfitCalculatorProps): ProfitCalculatorResult => {
  // Calculate the gross profit before fees
  const grossProfit = (Math.abs(sellPrice - buyPrice) / buyPrice) * investment;

  // Calculate the total fee amount (fee is a percentage)
  const totalFees = (fee / 100) * investment;

  // Calculate the net profit and round it to 2 decimal places
  const netProfit = grossProfit - totalFees;

  // Return the fee and net profit rounded to 2 decimals
  return useMemo(
    () => ({
      orderFee: Math.round(totalFees * 100) / 100, // Fee rounded to 2 decimals
      profit: Math.round(netProfit * 100) / 100, // Profit rounded to 2 decimals
    }),
    [buyPrice, sellPrice, investment, fee]
  );
};

export default useProfitCalculator;
