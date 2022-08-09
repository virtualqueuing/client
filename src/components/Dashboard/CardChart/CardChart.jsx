import React from "react";
import SingleChartContainer from "../components/SingleChartContainer";
import TitleforTheChart from "../components/Title";
import ItemDescription from "./components/ItemDescription";
import TableCard from "./components/TableCard";
import { chartAnimation } from "../../../constant";

const CardChart = ({ cardData }) => {
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
      <TableCard tableInfo={cardData.smallTableInfo} />
      <TableCard tableInfo={cardData.mediumTableInfo} />
      <TableCard tableInfo={cardData.largeTableInfo} />
    </SingleChartContainer>
  );
};

export default CardChart;
