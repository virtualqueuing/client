// eslint-disable-next-line no-unused-vars
import _ from "lodash";
import SingleQueue from "../SingleQueue";
import { QueueListContainer, QueueSection } from "../styles/QueueList.styles";
import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { QUEUE_STATUS } from "../../constant";

const MainQueues = ({ queues, queueStatus, tableType, searchQueue }) => {
  MainQueues.propTypes = {
    queues: PropTypes.array.isRequired,
    tableType: PropTypes.string.isRequired,
  };
  let showList = [];
  if (queueStatus === "All") {
    showList = queues;
  } else if (queueStatus === "Queuing") {
    showList = queues.filter((queue) => queue.status === QUEUE_STATUS.WAITING);
  } else if (queueStatus === "Absent") {
    showList = queues.filter((queue) => queue.status === QUEUE_STATUS.ABSENT);
  }

  if (!_.isEmpty(showList)) {
    showList =
      tableType === "Table Type"
        ? showList
        : showList.filter((queue) => queue.tableSize === tableType);
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

  return (
    <QueueSection>
      <QueueListContainer>{singleQueues}</QueueListContainer>
    </QueueSection>
  );
};

export default MainQueues;
