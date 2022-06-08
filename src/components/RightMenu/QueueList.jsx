import SingleQueue from "../SingleQueue";
import { QueueSection } from "../styles/QueueList.styles";
import React, { useState } from "react";

const MainQueues = ({ queues, queueStatus }) => {
  let showList = [];
  if (queueStatus === "All") {
    showList = queues;
  } else if (queueStatus === "Queuing") {
    showList = queues.filter((queue) => queue.status === "Waiting");
  } else if (queueStatus === "Completed") {
    showList = queues.filter((queue) => queue.status === "Completed");
  } else if (queueStatus === "Absent") {
    showList = queues.filter((queue) => queue.status === "Absent");
  }
  const [activeQueueId, setActiveQueueId] = useState("");
  return (
    <QueueSection>
      {showList.map((queue) => (
        <SingleQueue
          key={queue._id}
          {...queue}
          activeQueueId={activeQueueId}
          setActiveQueueId={setActiveQueueId}
        />
      ))}
    </QueueSection>
  );
};

export default MainQueues;
