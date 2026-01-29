import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

// Mock data matching the points in your image
const data = [
  { name: 'Jan', value: 58 },
  { name: 'Feb', value: 56 },
  { name: 'Mar', value: 20 },
  { name: 'Apr', value: 100 },
  { name: 'May', value: 92 },
  { name: 'Jun', value: 42 },
  { name: 'JUl', value: 38 },
  { name: 'Aug', value: 72 },
  { name: 'Sept', value: 42 },
  { name: 'OCt', value: 88 },
  { name: 'Nov', value: 41 },
  { name: 'Dec', value: 26 },
];

const UserGrowthChart: React.FC = () => {
  return (
    <div className="w-full  p-6 bg-[#0f172a] rounded-3xl border border-slate-800 shadow-2xl">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8 px-2">
        <h2 className="text-2xl font-semibold text-white tracking-tight">User Growth</h2>
        <div className="flex bg-[#1e293b] p-1 rounded-xl">
          <button className="px-4 py-1.5 text-sm font-medium text-slate-900 bg-white rounded-lg transition-all">
            Monthly
          </button>
          <button className="px-4 py-1.5 text-sm font-medium text-slate-400 hover:text-white transition-all">
            Weekly
          </button>
        </div>
      </div>

      {/* Chart Section */}
      <div className="h-100 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 8 }}>
            <defs>
              {/* The Glowy Gradient */}
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#818cf8" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#818cf8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={true} 
              horizontal={true} 
              stroke="#1e293b" 
            />
            
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 14 }} 
              dy={15}
            />
            
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 14 }}
              tickFormatter={(value) => `${value}%`}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
            />

            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
              itemStyle={{ color: '#818cf8' }}
            />

            <Area
              type="monotone" // This creates the smooth "curvy" look
              dataKey="value"
              stroke="#818cf8"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue)"
              dot={{
                r: 4,
                fill: "#fff",
                stroke: "#818cf8",
                strokeWidth: 2,
              }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserGrowthChart;