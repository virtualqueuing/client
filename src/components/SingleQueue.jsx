import { QueueItem, QueueData } from "./styles/SingleQueue.styles";
import SeparateLine from "./styles/SeparateLine.styles";

const SingleQueue = ({name, phoneNumber, location, queueNumber, guest, table, type, state}) => {
  return (
    <>
      <QueueItem>
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
