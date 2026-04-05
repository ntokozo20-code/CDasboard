import React from "react";
import LiveMarketItem from "./LiveMarketItem";

export default function LiveMarket() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-bold mb-4">Live Market</h2>
      <LiveMarketItem name="Ethereum" symbol="ETH/USDT" change="+14.02%" price="39,786 USD" color="purple" />
      <LiveMarketItem name="Bitcoin" symbol="BTC/USDT" change="+4.02%" price="21,786 USD" color="yellow" />
      <LiveMarketItem name="Litecoin" symbol="LTC/USDT" change="-4.02%" price="9,786 USD" color="blue" />
      <LiveMarketItem name="Cardano" symbol="ADA/USDT" change="+0.02%" price="4,786 USD" color="green" />
    </div>
  );
}