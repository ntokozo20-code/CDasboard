export default function TransactionItem({ name, type, value, time }) {
  const statusColors = {
    Received: "text-green-500",
    Buy: "text-orange-500",
  };
  return (
    <div className="flex justify-between items-center mb-3">
      <div>
        <p className="font-semibold">{name}</p>
        <p className={`text-sm ${statusColors[type]}`}>{type}</p>
      </div>
      <div className="text-right">
        <p className="font-semibold">{value}</p>
        <p className="text-gray-500 text-sm">{time}</p>
      </div>
    </div>
  );
}