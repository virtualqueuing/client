import React, { useState } from "react";
import styled from "styled-components";
import NotesPieChart from "./PieChart/NotesPieChart";
import TotalCustomerLineChart from "./LineChart/LineChart";
import CardChart from "./CardChart/CardChart";
import ArrivedPieChart from "./PieChart/ArrivedPieChart";
import CustomerTableBarChart from "./BarChart/CustomerTableBarChart";
import MainboardContainer from "../MainboardContainer";
import TimeFilter from "./TimeFilter/TimeFilter";
import ChartData from "../../assets/data/data";

const RowContainer = styled.div`
  display: flex;
  height: ${({ rowHeight }) => rowHeight || "480px"};
  min-width: 80vw;
  justify-content: center;
  align-items: center;
  gap: 1%;
`;

const DashboardApp = () => {
  const [database, setDatabase] = useState(ChartData.LastWeek);

  return (
    <MainboardContainer>
      <TimeFilter setDatabase={setDatabase} />
      <RowContainer>
        <CardChart cardData={database.cardData} />
        <ArrivedPieChart arrivedData={database.arrivedRateData} />
        <NotesPieChart notesData={database.notesData} />
      </RowContainer>
      <RowContainer>
        <TotalCustomerLineChart customerData={database.customerNumberData} />
        <CustomerTableBarChart customerData={database.customerNumberData} />
      </RowContainer>
    </MainboardContainer>
  );
};

export default DashboardApp;
