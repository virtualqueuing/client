import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainQueues from "./QueueList";
import { RightMenuContainer } from "../styles/RightMenu.styles";
import axios from "axios";
import { API_URI } from "../../constant.jsx";

const MainBar = () => {
  const [queueStatus, setQueueStatus] = useState("All");
  const [queues, setQueues] = useState([]);
  const [tableType, setTableType] = useState("Table Type");
  const [searchQueue, setSearchQueue] = useState("");

  useEffect(() => {
    const fetchQueue = async () => {
      // eslint-disable-next-line no-undef
      const { data } = await axios.get(`${API_URI}/v1/queues`);
      setQueues(data);
    };
    fetchQueue();
  }, [queues]);

  return (
    <RightMenuContainer>
      <Header
        queueStatus={queueStatus}
        setQueueStatus={setQueueStatus}
        setTableType={setTableType}
        setSearchQueue={setSearchQueue}
      />
      <MainQueues
        queueStatus={queueStatus}
        tableType={tableType}
        queues={queues}
        searchQueue={searchQueue}
      />
      <Footer />
    </RightMenuContainer>
  );
};

export default MainBar;
