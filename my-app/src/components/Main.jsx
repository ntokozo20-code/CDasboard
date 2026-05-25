import React from "react";
import MetricCardGrid from "./ui/MetricCardGrid";
import Charts from "./ui/Charts";
import LiveMarket from "./ui/Live Market";
import Transactions from "./ui/Transactions";

export default function Main() {
  return (
    <main className="flex-1 p-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Top part*/}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <MetricCardGrid />
          </div>
          <div className="flex-1">
            <Charts />
          </div>
        </div>

        {/* Bottom part with transactions on the right */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <LiveMarket />
          </div>
          <div className="flex-1">
            <Transactions />
          </div>
        </div>
      </div>
    </main>
  );
}
