import React from "react";
import Logo from "../Logo";
import { RightMenuContainer } from "../styles/RightMenu.styles";
import styled from "styled-components";
import NotesPieChart from "./PieChart/NotesPieChart";
import TotalCustomerLineChart from "./LineChart";
import CardChart from "./CardChart/CardChart";
import ArrivedPieChart from "./PieChart/ArrivedPieChart";

const DashboardAppWrapper = styled(RightMenuContainer)`
  justify-content: space-between;
  align-items: center;
`;

const MainboardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const UpperContainer = styled.div`
  display: flex;
  height: 40%;
  width: 100%;
  padding: 0 15px;
  justify-content: center;
  align-items: center;
`;

const LowerContainer = styled.div`
  display: flex;
  height: 56%;
  width: 100%;
  padding: 0 15px;
  justify-content: center;
  align-items: center;
`;

const DashboardApp = () => {
  return (
    <DashboardAppWrapper>
      <Logo path={"/"} alt="profileLogo" logoSize="large" />
      <MainboardContainer>
        <UpperContainer>
          <CardChart />
          <ArrivedPieChart />
          <NotesPieChart />
        </UpperContainer>
        <LowerContainer>
          <TotalCustomerLineChart />
        </LowerContainer>
      </MainboardContainer>
    </DashboardAppWrapper>
  );
};

export default DashboardApp;
