import SingleChartContainer from "./components/SingleChartContainer";
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
import TitleforTheChart from "./components/Title";

const data = [
  {
    day: "Mon-W1",
    Customers: 50,
  },
  {
    day: "Tue-W1",
    Customers: 60,
  },
  {
    day: "Wed-W1",
    Customers: 45,
  },
  {
    day: "Thur-W1",
    Customers: 90,
  },
  {
    day: "Fri-W1",
    Customers: 85,
  },
  {
    day: "Sat-W1",
    Customers: 100,
  },
  {
    day: "Sun-W1",
    Customers: 70,
  },
  {
    day: "Mon-W2",
    Customers: 45,
  },
  {
    day: "Tue-W2",
    Customers: 50,
  },
  {
    day: "Wed-W2",
    Customers: 55,
  },
  {
    day: "Thur-W2",
    Customers: 85,
  },
  {
    day: "Fri-W2",
    Customers: 90,
  },
  {
    day: "Sat-W2",
    Customers: 105,
  },
  {
    day: "Sun-W2",
    Customers: 75,
  },
];

const chartAnimation = {
  before: {
    opacity: 0,
    x: "100vw",
  },
  after: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      type: "tween",
      duration: 0.6,
    },
  },
  hover: {
    scale: 1.1,
  },
};

const TotalCustomerLineChart = () => {
  return (
    <SingleChartContainer
      variants={chartAnimation}
      initial="before"
      animate="after"
      whileHover="hover"
    >
      <TitleforTheChart>Daily Customers</TitleforTheChart>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke="#ff8042" fontSize={"15px"} />
          <YAxis stroke="#ffbb28" fontSize={"15px"} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Customers" stroke="#0088fe" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </SingleChartContainer>
  );
};
export default TotalCustomerLineChart;
