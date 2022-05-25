import React from "react";
import styled from "styled-components";
import Header from "../Header";
import SingleQueue from "../Queue";

const MainContainer = styled.div`
  width: 73vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainBar = () => {
  return (
    <MainContainer>
      <Header />
      <SingleQueue />
    </MainContainer>
  );
};

export default MainBar;
