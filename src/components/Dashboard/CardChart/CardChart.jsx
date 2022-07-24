import React from "react";
import SingleChartContainer from "../components/SingleChartContainer";
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

const smallTableInfo = { tableType: "Small", averageNumber: 2, maximumNumber: 4 };
const mediumTableInfo = { tableType: "Medium", averageNumber: 6, maximumNumber: 8 };
const largeTableInfo = { tableType: "Large", averageNumber: 9, maximumNumber: 11 };

const CardChart = () => {
  return (
    <SingleChartContainer
      variants={chartAnimation}
      initial="before"
      animate="after"
      whileHover="hover"
    >
      <TableCard tableInfo={smallTableInfo} />
      <TableCard tableInfo={mediumTableInfo} />
      <TableCard tableInfo={largeTableInfo} />
    </SingleChartContainer>
  );
};

export default CardChart;
