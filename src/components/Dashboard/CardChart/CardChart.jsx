import React from "react";
import SingleChartContainer from "../components/SingleChartContainer";
import TitleforTheChart from "../components/Title";
import ItemDescription from "./components/ItemDescription";
import TableCard from "./components/TableCard";
import { chartAnimation } from "../../../constant"

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
      containerWidth="33.3%"
      containerHeight="calc(100% - 30px)"
    >
      <TitleforTheChart>Waiting Time</TitleforTheChart>
      <ItemDescription />
      <TableCard tableInfo={smallTableInfo} />
      <TableCard tableInfo={mediumTableInfo} />
      <TableCard tableInfo={largeTableInfo} />
    </SingleChartContainer>
  );
};

export default CardChart;
