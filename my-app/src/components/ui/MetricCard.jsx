import { FaBitcoin } from "react-icons/fa";
import { SiEthereum, SiCardano } from "react-icons/si";
import { FaCoins } from "react-icons/fa";

function MetricCard({ title, value, change, color }) {
  const isPositive = change.includes("+");

  const getIcon = () => {
    if (title.includes("Bitcoin")) return <FaBitcoin />;
    if (title.includes("Ethereum")) return <SiEthereum />;
    if (title.includes("Litecoin")) return <FaCoins />;
    if (title.includes("Cardano")) return <SiCardano />;
    return null;
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-start">
      
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-3">
        
        {/* BIG ICON */}
        <div className={`w-20 h-20 rounded-xl flex items-center justify-center text-white text-2xl ${color}`}>
          {getIcon()}
        </div>

        {/* VALUE */}
        <h1 className="text-xl font-bold text-gray-900">
          {value}
        </h1>

        {/* TITLE */}
        <p className="text-sm text-gray-400">
          {title}
        </p>

      </div>

      {/* RIGHT SIDE (CHANGE) */}
      <p
        className={`text-sm font-medium ${
          isPositive ? "text-green-500" : "text-red-500"
        }`}
      >
        {change}
      </p>

    </div>
  );
}

export default MetricCard;