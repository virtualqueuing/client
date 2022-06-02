import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainQueues from "./QueueList";
import { RightMenuContainer } from "../styles/RightMenu.styles";


const MainBar = () => {

  return (
    <RightMenuContainer>
      <Header />
      <MainQueues />
      <Footer />
    </RightMenuContainer>
  );
};

export default MainBar;
