import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import MainQueues from "./MainQueues";

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
      <MainQueues />
      <Footer />
    </MainContainer>
  );
};

export default MainBar;
