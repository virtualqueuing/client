import React from "react";
import styled from "styled-components";
import NotesPieChart from "./PieChart/NotesPieChart";
import TotalCustomerLineChart from "./LineChart/LineChart";
import CardChart from "./CardChart/CardChart";
import ArrivedPieChart from "./PieChart/ArrivedPieChart";
import CustomerTableBarChart from "./BarChart/CustomerTableBarChart";
import MainboardContainer from "../MainboardContainer";

const RowContainer = styled.div`
  display: flex;
  height: ${({ rowHeight }) => rowHeight || "480px"};
  min-width: 80vw;
  justify-content: center;
  align-items: center;
  gap: 1%;
`;

const DashboardApp = () => {
  return (
    <MainboardContainer>
      <RowContainer>
        <CardChart />
        <ArrivedPieChart />
        <NotesPieChart />
      </RowContainer>
      <RowContainer>
        <TotalCustomerLineChart />
        <CustomerTableBarChart />
      </RowContainer>
    </MainboardContainer>
  );
};

export default DashboardApp;
