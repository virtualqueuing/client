import SingleChartContainer from "../components/SingleChartContainer";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import TitleforTheChart from "../components/Title";
import { chartAnimation } from "../../../constant";
import customerNumberData from "../../../assets/data/customerNumbers";

const TotalCustomerLineChart = () => {
  return (
    <SingleChartContainer
      variants={chartAnimation}
      initial="before"
      animate="after"
      whileHover="hover"
      containerWidth="48%"
      containerHeight="calc(100% - 30px)"
    >
      <TitleforTheChart>Customer Numbers per Day</TitleforTheChart>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          width={400}
          height={300}
          data={customerNumberData}
          margin={{
            top: 5,
            right: 100,
            left: 50,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke="#ff8042" />
          <YAxis stroke="#ffbb28" />
          <Tooltip />
          <Legend wrapperStyle={{ bottom: 0 }} />
          <Line type="monotone" dataKey="Customers" stroke="#0088fe" activeDot={{ r: 7 }} />
        </LineChart>
      </ResponsiveContainer>
    </SingleChartContainer>
  );
};
export default TotalCustomerLineChart;
