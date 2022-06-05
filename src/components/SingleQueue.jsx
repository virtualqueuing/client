import { QueueItem, QueueData } from "./styles/SingleQueue.styles";
import SeparateLine from "./styles/SeparateLine.styles";
import React, { useContext } from "react";
import { Context } from "../pages/Context";

// import { CheckQueueNum } from "../pages/Homepage";

const SingleQueue = ({
  _id,
  name,
  phoneNumber,
  location,
  queueNumber,
  guest,
  table,
  type,
  state,
  highlightActive,
  setHighlightActive,
}) => {
  const [, setContext] = useContext(Context);
  // highlight the current queue

  return (
    <>
      <QueueItem
        active={_id === highlightActive}
        onClick={() => {
          setContext(_id - 1);
          setHighlightActive(_id);
        }}
      >
        <QueueData color="#000">{name}</QueueData>
        <QueueData color="#000">{phoneNumber}</QueueData>
        <QueueData color="#000">{location}</QueueData>
        <QueueData color="#000">{queueNumber}</QueueData>
        <QueueData color="#000">{guest}</QueueData>
        <QueueData color="#000">{table}</QueueData>
        <QueueData color="#000">{type}</QueueData>
        <QueueData
          style={{
            color: state === "Waiting" ? "#FFD25D" : state === "Absent" ? "#DD0000" : "#13E800",
          }}
        >
          {state}
        </QueueData>
      </QueueItem>
      <SeparateLine color="#c4c4c4" width="98%"></SeparateLine>
    </>
  );
};

export default SingleQueue;
