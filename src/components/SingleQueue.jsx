import { QueueItem, QueueData } from "./styles/SingleQueue.styles";
import SeparateLine from "./styles/SeparateLine.styles";
import React, { useContext } from "react";
import { Context } from "../pages/Context";
// import { CheckQueueNum } from "../pages/Homepage";

const SingleQueue = ({ _id, name, phoneNumber, location, queueNumber, guest, table, type, state }) => {

  const [, setContext] = useContext(Context);


  return (
    <>
      <QueueItem onClick={() => setContext(_id-1)}>
        <QueueData color="#000">{name}</QueueData>
        <QueueData color="#000">{phoneNumber}</QueueData>
        <QueueData color="#000">{location}</QueueData>
        <QueueData color="#000">{queueNumber}</QueueData>
        <QueueData color="#000">{guest}</QueueData>
        <QueueData color="#000">{table}</QueueData>
        <QueueData color="#000">{type}</QueueData>
        <QueueData color="#000">{state}</QueueData>
      </QueueItem>
      <SeparateLine color="#c4c4c4" width="98%"></SeparateLine>
    </>
  );
};

export default SingleQueue;
