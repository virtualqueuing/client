import React from "react";
import SingleChartContainer from "../components/SingleChartContainer";
import TitleforTheChart from "../components/Title";
import ItemDescription from "./components/ItemDescription";
import TableCard from "./components/TableCard";

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

const smallTableInfo = { tableType: "S", averageNumber: 2, maximumNumber: 4 };
const mediumTableInfo = { tableType: "M", averageNumber: 6, maximumNumber: 8 };
const largeTableInfo = { tableType: "L", averageNumber: 9, maximumNumber: 11 };

const CardChart = () => {
  return (
    <SingleChartContainer
      variants={chartAnimation}
      initial="before"
      animate="after"
      whileHover="hover"
    >
      <TitleforTheChart>Waiting time</TitleforTheChart>
      <ItemDescription />
      <TableCard tableInfo={smallTableInfo} />
      <TableCard tableInfo={mediumTableInfo} />
      <TableCard tableInfo={largeTableInfo} />
    </SingleChartContainer>
  );
};

export default CardChart;
