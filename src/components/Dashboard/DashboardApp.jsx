import React from "react";
import Logo from "../Logo";
import { RightMenuContainer } from "../styles/RightMenu.styles";
import styled from "styled-components";
import NotesPieChart from "./PieChart/NotesPieChart";
import TotalCustomerLineChart from "./LineChart/LineChart";
import CardChart from "./CardChart/CardChart";
import ArrivedPieChart from "./PieChart/ArrivedPieChart";
import CustomerTableBarChart from "./BarChart/CustomerTableBarChart";

const DashboardAppWrapper = styled(RightMenuContainer)`
  justify-content: space-between;
  align-items: center;
`;

const MainboardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

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
    <DashboardAppWrapper>
      <Logo path={"/"} alt="profileLogo" logoSize="large" />
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
    </DashboardAppWrapper>
  );
};

export default DashboardApp;
