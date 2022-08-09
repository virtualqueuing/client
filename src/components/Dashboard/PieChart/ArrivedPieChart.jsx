import React from "react";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer, Tooltip } from "recharts";
import SingleChartContainer from "../components/SingleChartContainer";
import TitleforTheChart from "../components/Title";
import { chartAnimation } from "../../../constant";

const COLORS = ["#00C49F", "#FF8042", "#FFBB28", "#0088FE"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="#fff" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ArrivedPieChart = ({ arrivedData }) => {
  return (
    <SingleChartContainer
      variants={chartAnimation}
      initial="before"
      animate="after"
      whileHover="hover"
      containerWidth="33.3%"
      containerHeight="calc(100% - 30px)"
    >
      <TitleforTheChart>Arrival Rate</TitleforTheChart>
      <ResponsiveContainer width="100%" height="80%">
        <PieChart width={400} height={400}>
          <Pie
            data={arrivedData}
            cx="50%"
            cy="43%"
            innerRadius={10}
            outerRadius={110}
            fill="#8884d8"
            dataKey="value"
            labelLine={false}
            label={renderCustomizedLabel}
          >
            {arrivedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" height={36} wrapperStyle={{ bottom: 10 }} />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </SingleChartContainer>
  );
};

export default ArrivedPieChart;
