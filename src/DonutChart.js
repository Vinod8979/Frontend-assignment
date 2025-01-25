import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const E_signCount = () => {
  const [e_signData, setE_signData] = useState([]);
  const [e_stampData, setE_stampData] = useState([]);

  useEffect(() => {
    setE_signData([
      { name: 'Initiated', value: 25 },
      { name: 'Pending', value: 20 },
      { name: 'Signed', value: 30 },
      { name: 'Expired', value: 25 },
    ]);

    setE_stampData([
      { name: 'Initiated', value: 35 },
      { name: 'Pending', value: 15 },
      { name: 'Signed', value: 25 },
      { name: 'Expired', value: 25 },
    ]);
  }, []);

  const COLORS = ['red', 'green', 'orange', 'blue'];

  return (
    <div className="flex justify-around">
      <div>
        <h3>E-sign Count</h3>
        <PieChart width={200} height={200}>
          <Pie
            data={e_signData}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {e_signData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div>
        <h3>E-stamp Count</h3>
        <PieChart width={200} height={200}>
          <Pie
            data={e_stampData}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {e_stampData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default E_signCount;
