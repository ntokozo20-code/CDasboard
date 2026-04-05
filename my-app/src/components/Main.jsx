import React from "react";
import MetricCardGrid from "./ui/MetricCardGrid";
import Charts from "./ui/Charts";                
import LiveMarket from "./ui/LiveMarket";        
import Transactions from "./ui/Transactions";    

export default function Main() {
  return (
    <main className="flex-1 p-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        
        {/* Top row: Metric cards + Chart */}
        <div className="flex gap-6">
          <div className="flex-1">
            <MetricCardGrid />  {/* <-- renders the 2x2 coin cards */}
          </div>
          <div className="flex-1">
            <Charts />          {/* <-- renders the BTC price chart */}
          </div>
        </div>

        {/* Bottom row: Live Market + Transactions */}
        <div className="flex gap-6">
          <div className="flex-1">
            <LiveMarket />      {/* <-- bottom-left market table */}
          </div>
          <div className="flex-1">
            <Transactions />    {/* <-- bottom-right transaction list */}
          </div>
        </div>

      </div>
    </main>
  );
}