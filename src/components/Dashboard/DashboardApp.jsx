import React from "react";
import Logo from "../Logo";
import { RightMenuContainer } from "../styles/RightMenu.styles";
import styled from "styled-components";
import NotesPieChart from "./PieChart/NotesPieChart";
<<<<<<< HEAD
import TotalCustomerLineChart from "./LineChart";
=======
import CardChart from "./CardChart/CardChart";
import ArrivedPieChart from "./PieChart/ArrivedPieChart";

>>>>>>> main
const DashboardAppWrapper = styled(RightMenuContainer)`
  justify-content: space-between;
  align-items: center;
`;

const MainboardContainer = styled.div`
  display: flex;
  gap: 3%;
  height: 85vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const DashboardApp = () => {
  return (
    <DashboardAppWrapper>
      <Logo path={"/"} alt="profileLogo" logoSize="large" />
      <MainboardContainer>
        <CardChart />
        <ArrivedPieChart />
        <NotesPieChart />
        <TotalCustomerLineChart />
      </MainboardContainer>
    </DashboardAppWrapper>
  );
};

export default DashboardApp;
