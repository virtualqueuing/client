import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainQueues from "./QueueList";
import { RightMenuContainer } from "../styles/RightMenu.styles";
import axios from "axios";

const MainBar = () => {
  const [queueStatus, setQueueStatus] = useState("All");
  const [queues, setQueues] = useState([]);
  const [tableType, setTableType] = useState("Table Type");

  useEffect(() => {
    const fetchQueue = async () => {
      // eslint-disable-next-line no-undef
      if (process.env.NODE_ENV !== "production") {
        const response = await axios.get("http://localhost:3000/v1/queues");
        setQueues(response.data);
      }
    };
    fetchQueue();
  }, []);

  return (
    <RightMenuContainer>
      <Header
        queueStatus={queueStatus}
        setQueueStatus={setQueueStatus}
        setTableType={setTableType}
      />
      <MainQueues queueStatus={queueStatus} tableType={tableType} queues={queues} />
      <Footer />
    </RightMenuContainer>
  );
};

export default MainBar;
