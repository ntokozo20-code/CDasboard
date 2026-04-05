import React from "react";
import TransactionItem from "./TransactionItem";

export default function Transactions() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-bold mb-4">Transactions</h2>
      <TransactionItem name="Ethereum" type="Received" value="$24,102" time="Today, 19:30" />
      <TransactionItem name="Bitcoin" type="Buy" value="$4,157" time="Today, 14:32" />
      <TransactionItem name="Bitcoin" type="Buy" value="$64,784" time="Today, 13:50" />
      <TransactionItem name="Litecoin" type="Buy" value="$14,265" time="Today, 09:38" />
    </div>
  );
}