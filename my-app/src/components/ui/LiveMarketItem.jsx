import { FaBitcoin } from "react-icons/fa";
import { SiEthereum, SiLitecoin, SiCardano } from "react-icons/si";

export default function LiveMarketItem({ name, symbol, change, price }) {

  const getIcon = () => {
    if (name.includes("Bitcoin")) return <FaBitcoin className="text-yellow-400" />;
    if (name.includes("Ethereum")) return <SiEthereum className="text-indigo-500" />;
    if (name.includes("Litecoin")) return <SiLitecoin className="text-blue-500" />;
    if (name.includes("Cardano")) return <SiCardano className="text-green-500" />;
  };

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-3">
        
        {/* Icon instead of colored circle */}
        <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-lg">
          {getIcon()}
        </div>

        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{symbol}</p>
        </div>
      </div>

      <div className="text-right">
        <p className={`${change.includes("-") ? "text-red-500" : "text-green-500"} font-semibold`}>
          {change}
        </p>
        <p className="text-gray-500">{price}</p>
      </div>
    </div>
  );
}