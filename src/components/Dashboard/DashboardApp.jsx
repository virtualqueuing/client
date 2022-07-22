import React from "react";
import Logo from "../Logo";
import { RightMenuContainer } from "../styles/RightMenu.styles";
import styled from "styled-components";
import NotesPieChart from "./PieChart/NotesPieChart";

const DashboardAppWrapper = styled(RightMenuContainer)`
  justify-content: space-between;
  align-items: center;
`;

const MainboardContainer = styled.div`
  display: flex;
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
        <NotesPieChart />
      </MainboardContainer>
    </DashboardAppWrapper>
  );
};

export default DashboardApp;
