import React from "react";
import MetricCard from "./MetricCard"; // import single card

export default function MetricCardGrid() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <MetricCard title="Bitcoin - BTC" value="$40,291" change="+0.25%" color="bg-yellow-400" />
      <MetricCard title="Ethereum - ETH" value="$18,291" change="+0.25%" color="bg-indigo-500" />
      <MetricCard title="Litecoin - LTC" value="$8,291" change="+0.25%" color="bg-blue-500" />
      <MetricCard title="Cardano - ADA" value="$3,291" change="-2.05%" color="bg-green-500" />
    </div>
  );
}