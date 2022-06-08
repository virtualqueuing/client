import { QueueItem, QueueData } from "./styles/SingleQueue.styles";
import SeparateLine from "./styles/SeparateLine.styles";
import React, { useContext } from "react";
import { Context } from "../pages/Context";

// import { CheckQueueNum } from "../pages/Homepage";

const SingleQueue = ({
  _id,
  name,
  phoneNumber,
  queueNumber,
  guestsNumber,
  tableSize,
  status,
  notes,
  createdAt,
  activeQueueId,
  setActiveQueueId,
}) => {
  const [, setSelectedQueue] = useContext(Context);
  const handleClick = () => {
    setSelectedQueue({ _id, name, phoneNumber, queueNumber, status, notes, createdAt });
    setActiveQueueId(_id);
  };

  return (
    <>
      <QueueItem active={_id === activeQueueId} onClick={handleClick}>
        <QueueData color="#000">
          <p>{name}</p>
        </QueueData>
        <QueueData color="#000">
          <p>{phoneNumber}</p>
        </QueueData>
        <QueueData color="#000">
          <p>{queueNumber}</p>
        </QueueData>
        <QueueData color="#000">
          <p>{guestsNumber}</p>
        </QueueData>
        <QueueData color="#000">
          <p>{tableSize}</p>
        </QueueData>
        <QueueData
          style={{
            color: status === "Waiting" ? "#FFD25D" : status === "Absent" ? "#DD0000" : "#13E800",
          }}
        >
          {status}
        </QueueData>
      </QueueItem>
      <SeparateLine color="#c4c4c4" width="98%"></SeparateLine>
    </>
  );
};

export default SingleQueue;
