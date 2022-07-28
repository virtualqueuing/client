import SingleChartContainer from "../components/SingleChartContainer";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import TitleforTheChart from "../components/Title";
import customerNumberData from "../../../assets/data/customerNumbers";
import { chartAnimation } from "../../../constant";
import theme from "../../../theme";

const CustomerTableBarChart = () => {
  return (
    <SingleChartContainer
      variants={chartAnimation}
      initial="before"
      animate="after"
      whileHover="hover"
      containerWidth="48%"
      containerHeight="calc(100% - 30px)"
    >
      <TitleforTheChart>No. of Customers by Table Sizes</TitleforTheChart>
      <BarChart
        width={550}
        height={330}
        data={customerNumberData}
        margin={{
          top: 5,
          right: 0,
          left: -30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="S" fill={theme.colors.components.neutralButton.fontColor} />
        <Bar dataKey="M" fill={theme.colors.components.arrivalButton.fontColor.normal} />
        <Bar dataKey="L" fill={theme.colors.components.positiveButton.fontColor} />
      </BarChart>
    </SingleChartContainer>
  );
};
export default CustomerTableBarChart;
