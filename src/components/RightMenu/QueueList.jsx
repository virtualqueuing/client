import _ from "lodash";
import SingleQueue from "../SingleQueue";
import { QueueSection } from "../styles/QueueList.styles";
import React, { useState, useMemo } from "react";

const MainQueues = ({ queues, queueStatus, tableType }) => {
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

  if (!_.isEmpty(showList)) {
    showList =
      tableType === "Table Type"
        ? queues
        : tableType === "Small"
        ? queues.filter((queue) => queue.tableSize === "small")
        : queues.filter((queue) => queue.tableSize === tableType);
  }

  const [activeQueueId, setActiveQueueId] = useState("");
  const singleQueues = useMemo(
    () =>
      showList.map((queue) => (
        <SingleQueue
          key={queue._id}
          {...queue}
          activeQueueId={activeQueueId}
          setActiveQueueId={setActiveQueueId}
        />
      )),
    [showList]
  );

  return <QueueSection>{singleQueues}</QueueSection>;
};

export default MainQueues;
