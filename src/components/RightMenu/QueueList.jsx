import SingleQueue from "../SingleQueue";
import { QueueSection } from "../styles/QueueList.styles";
import React, {useState} from 'react';


const MainQueues = ({queues, type}) => {
  let showList = [];
  if (type === "All") {
    showList = queues
  } else if (type === "Queuing") {
    showList = queues.filter((queue) => queue.state === "Waiting")
  } else if (type === "Completed") {
    showList = queues.filter((queue) => queue.state === "Completed")
  } else if (type === "Absent") {
    showList = queues.filter((queue) => queue.state === "Absent")
  }
  const [highlightActive, setHighlightActive] = useState(1);
  return (
    <QueueSection>
      {showList.map((queue) => (
        <SingleQueue key={queue._id} {...queue} highlightActive={highlightActive} setHighlightActive={setHighlightActive}/>
      ))}
    </QueueSection>
  );
};

export default MainQueues;
