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
import { chartAnimation } from "../../../constant"
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
      <TitleforTheChart>Daily No. of Customers</TitleforTheChart>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={customerNumberData}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke="#ff8042" fontSize={"12px"} />
          <YAxis stroke="#ffbb28" fontSize={"12px"} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Customers" stroke="#0088fe" activeDot={{ r: 7 }} />
        </LineChart>
      </ResponsiveContainer>
    </SingleChartContainer>
  );
};
export default TotalCustomerLineChart;
