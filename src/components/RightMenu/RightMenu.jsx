import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainQueues from "./QueueList";
import { RightMenuContainer } from "../styles/RightMenu.styles";
import axios from "axios";

const MainBar = () => {
  const [queueStatus, setQueueStatus] = useState("All");
  const [queues, setQueues] = useState([]);

  useEffect(() => {
    const fetchQueue = async () => {
      const response = await axios.get("http://localhost:3000/v1/queues");
      setQueues(response.data);
    };
    fetchQueue();
    console.log(queues);
  }, []);

  return (
    <RightMenuContainer>
      <Header queueStatus={queueStatus} setQueueStatus={setQueueStatus} />
      <MainQueues queueStatus={queueStatus} queues={queues} />
      <Footer />
    </RightMenuContainer>
  );
};

export default MainBar;
