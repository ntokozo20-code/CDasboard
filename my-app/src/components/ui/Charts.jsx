import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Jan", price: 20000 },
  { name: "Mar", price: 22000 },
  { name: "May", price: 26000 },
  { name: "Jul", price: 30000 },
  { name: "Sep", price: 28000 },
  { name: "Nov", price: 32000 },
];

function Chart() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      
      {/* TITLE */}
      <h2 className="text-lg font-semibold mb-4">BTC Prices</h2>

      {/* GRAPH */}
      <div className="w-full h-78">
        <ResponsiveContainer>
          <LineChart data={data}>
            
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              className="text-xs"
            />

            <Tooltip />

            <Line 
              type="monotone" 
              dataKey="price" 
              stroke="#7C3AED"
              strokeWidth={3}
              dot={false}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default Chart;