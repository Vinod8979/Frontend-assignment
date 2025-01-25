import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Initiated', value: 30 },
  { name: 'Pending', value: 20 },
  { name: 'Signed', value: 15 },
  { name: 'Expired', value: 10 },
];

const COLORS = ['#D0D0D0', '#8C5FF0', '#4D3DB2', '#EDF0F2'];

const DonutChart = () => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        innerRadius={70}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default DonutChart;