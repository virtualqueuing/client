import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainQueues from "./QueueList";
import { RightMenuContainer } from "../styles/RightMenu.styles";
import { queues } from "../../assets/dummyData/dummyData";



const MainBar = () => {
  const [typed, setType] = useState("All")
  return (
    <RightMenuContainer>
      <Header typed={typed} changeType={setType}/>
      <MainQueues type={typed} queues={queues}/>
      <Footer />
    </RightMenuContainer>
  );
};

export default MainBar;
