// eslint-disable-next-line no-unused-vars
import _ from "lodash";
import SingleQueue from "../SingleQueue";
import { QueueSection } from "../styles/QueueList.styles";
import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";

const MainQueues = ({ queues, queueStatus, tableType, searchQueue }) => {
  MainQueues.propTypes = {
    queues: PropTypes.array.isRequired,
    tableType: PropTypes.string.isRequired,
  };
  let showList = [];
  if (queueStatus === "All") {
    showList = queues;
  } else if (queueStatus === "Queuing") {
    showList = queues.filter((queue) => queue.status === "Waiting");
  } else if (queueStatus === "Absent") {
    showList = queues.filter((queue) => queue.status === "Absent");
  }
  console.log(showList);

  if (_.isEmpty(showList)) {
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
      showList
        .filter((queueValue) => {
          if (searchQueue === "") {
            return queueValue;
          } else if (
            queueValue.name.toLowerCase().includes(searchQueue.toLowerCase()) ||
            queueValue.phoneNumber.includes(searchQueue)
          ) {
            return queueValue;
          }
        })
        .map((queue) => (
          <SingleQueue
            key={queue._id}
            {...queue}
            activeQueueId={activeQueueId}
            setActiveQueueId={setActiveQueueId}
          />
        )),
    [showList, activeQueueId, searchQueue]
  );

  return <QueueSection>{singleQueues}</QueueSection>;
};

export default MainQueues;
