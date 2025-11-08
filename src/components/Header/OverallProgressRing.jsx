import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export const OverallProgressRing = ({ progress }) => {
  const data = [
    { name: 'Completed', value: progress },
    { name: 'Remaining', value: 100 - progress }
  ];

  const COLORS = ['#10B981', '#E5E7EB'];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Overall Progress</h3>
      <div className="flex items-center justify-center">
        <div className="relative">
          <ResponsiveContainer width={120} height={120}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={35}
                outerRadius={50}
                startAngle={90}
                endAngle={450}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-900">{progress}%</span>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          {progress === 100 ? 'All courses completed! 🎉' : 'Keep going! You\'re doing great!'}
        </p>
      </div>
    </div>
  );
};