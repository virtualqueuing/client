import SingleChartContainer from "../components/SingleChartContainer";
import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import TitleforTheChart from "../components/Title";
import customerNumberData from "../../../assets/data/customerNumbers";
import { chartAnimation } from "../../../constant"
import theme from "../../../theme"

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
                width={500}
                height={240}
                data={customerNumberData}
                margin={{
                    top: 10,
                    right: 10,
                    left: 10,
                    bottom: 10
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="S" fill={theme.colors.components.neutralButton.fontColor}/>
                <Bar dataKey="M" fill={theme.colors.components.arrivalButton.fontColor.normal} />
                <Bar dataKey="L" fill={theme.colors.components.positiveButton.fontColor} />
            </BarChart>
        </SingleChartContainer>
    );
};
export default CustomerTableBarChart;
